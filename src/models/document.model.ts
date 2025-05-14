import mongoose from 'mongoose';

const DocumentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  facebook_fanpage_id: { type: String, required: true },
  embedding: { type: [Number], required: true }, // Đây sẽ là mảng vector
});

const Document = mongoose.model('Document', DocumentSchema);

export default Document;
