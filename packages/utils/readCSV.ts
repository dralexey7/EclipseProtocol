import { createReadStream } from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

export async function readCsv<T = Record<string, string>>(
  filename: string,
  baseDir = 'prisma/seed-data',
): Promise<T[]> {
  const filePath = path.resolve(baseDir, filename);
  const records: T[] = [];

  return new Promise<T[]>((resolve, reject) => {
    createReadStream(filePath)
      .pipe(parse({ columns: true, trim: true }))
      .on('data', (row: T) => records.push(row))
      .on('end', () => resolve(records))
      .on('error', reject);
  });
}
