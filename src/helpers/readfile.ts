import { readFile } from 'fs/promises';

export async function readJsonFiles(file1Path: string, file2Path: string) {
  try {
    const data1 = await readFile(file1Path, 'utf8');
    const json1 = JSON.parse(data1);

    const data2 = await readFile(file2Path, 'utf8');
    const json2 = JSON.parse(data2);

    return { json1, json2 };
  } catch (error) {
    console.error('Lỗi khi đọc file JSON:', error);
    throw error;
  }
}
