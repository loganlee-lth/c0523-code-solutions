import { writeFile } from 'node:fs/promises';

const selfNote = process.argv[2];

async function writeFileFunc() {
  try {
    await writeFile('note.txt', selfNote + '\n');
  } catch (err) {
    console.log('Error:', err.message);
  }
}

if (!selfNote) {
  console.log('Invalid input.');
} else {
  writeFileFunc();
}
