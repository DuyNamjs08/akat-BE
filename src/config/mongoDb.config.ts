import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Client } from '@elastic/elasticsearch';
import { prepareForEs } from '../helpers';
dotenv.config();
type MyDocument = {
  [key: string]: any;
  _id: string;
  __v: number;
};
const esClient = new Client({
  node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
console.log('ES URL', process.env.ELASTICSEARCH_URL);
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URL;
    if (!uri) {
      throw new Error('❌ MONGODB_URL is not defined in environment variables');
    }
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected!');
    initialSync();
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('❌ MongoDB connection is not established');
    }
    const changeStream = db.watch([], { fullDocument: 'updateLookup' });
    changeStream.on('change', async (change: any) => {
      const ns = change.ns; // namespace: { db: 'yourDB', coll: 'users' }
      const indexName = ns.coll.toLowerCase(); // dùng tên collection làm index
      const docId = change.documentKey._id.toString();

      switch (change.operationType) {
        case 'insert':
        case 'update':
        case 'replace':
          const doc = change.fullDocument;
          if (!doc) {
            console.warn(`⚠️ No fullDocument in change event for ${indexName}`);
            return;
          }
          const docForEs = prepareForEs(change.fullDocument);
          await esClient.index({
            index: indexName,
            id: docId,
            body: docForEs,
          });
          console.log(`📤 Synced ${indexName}: ${docId}`);
          break;

        case 'delete':
          await esClient.delete({
            index: indexName,
            id: docId,
          });
          console.log(`❌ Deleted from ${indexName}: ${docId}`);
          break;
      }
    });
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};
async function initialSync() {
  try {
    const db = mongoose.connection.db;
    if (!db) {
      throw new Error('❌ MongoDB connection is not established');
    }
    const collections = await db.listCollections().toArray();

    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      const indexName = collectionName.toLowerCase();
      const collection = db.collection(collectionName);
      // Kiểm tra index có tồn tại trong ES không
      const exists = await esClient.indices.exists({
        index: indexName,
      });

      if (!exists) {
        await esClient.indices.create({ index: indexName });
      }

      // Đồng bộ toàn bộ dữ liệu
      const cursor = collection.find({});
      while (await cursor.hasNext()) {
        const doc = await cursor.next();
        if (!doc) {
          console.warn('⚠️ Skipping null document during initial sync');
          continue;
        }
        const docTyped = doc as unknown as MyDocument;
        const docForEs = prepareForEs(docTyped);
        await esClient.index({
          index: indexName,
          id: doc._id.toString(),
          body: docForEs,
        });
      }
      console.log(`🔄 Initial sync completed for ${indexName}`);
    }
  } catch (error) {
    console.error('❌ Initial sync error:', error);
  }
}

export default connectDB;
