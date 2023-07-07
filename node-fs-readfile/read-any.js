import { readFile } from 'node:fs/promises';

const file = process.argv[2];

async function readFileFunc(file) {
  try {
    const content = await readFile(file, 'utf8');
    console.log(content);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

if (!file) {
  console.log('Invalid file path.');
} else {
  readFileFunc(file);
}
