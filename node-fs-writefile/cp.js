import { writeFile, readFile } from 'node:fs/promises';

const oldFile = process.argv[2];
const newFile = process.argv[3];

async function readWriteFunc() {
  try {
    const content = await readFile(oldFile);
    await writeFile(newFile, content);
  } catch (err) {
    console.log('Error:', err);
  }
}

if (!oldFile) {
  console.log('Error from process.argv[2]:', oldFile);
} else if (!newFile) {
  console.log('Error from process.argv[3]:', newFile);
} else {
  readWriteFunc();
}
