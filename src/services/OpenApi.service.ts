import Document from '../models/document.model';
import axios from 'axios';

export async function addDocument(content: string) {
  // Kiểm tra xem nội dung đã tồn tại trong cơ sở dữ liệu chưa
  const existingDoc = await Document.findOne({ content });
  if (existingDoc) {
    console.log('Document already exists');
    return;
  }
  // Nếu không tồn tại, gọi API OpenAI để tạo embedding
  // và lưu vào cơ sở dữ liệu
  // Gọi API OpenAI để tạo embedding
  const response = await axios.post(
    'https://api.openai.com/v1/embeddings',
    {
      input: content,
      model: 'text-embedding-ada-002',
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const embedding = response.data.data[0].embedding;

  const doc = new Document({ content, embedding });
  await doc.save();

  console.log('Document saved');
}
async function searchDocuments(question: string) {
  const response = await axios.post(
    'https://api.openai.com/v1/embeddings',
    {
      input: question,
      model: 'text-embedding-ada-002',
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const questionEmbedding = response.data.data[0].embedding;

  const results = await Document.aggregate([
    {
      $search: {
        knnBeta: {
          vector: questionEmbedding,
          path: 'embedding',
          k: 3,
        },
      },
    },
    {
      $project: {
        content: 1,
        score: { $meta: 'searchScore' },
      },
    },
  ]);

  return results;
}
