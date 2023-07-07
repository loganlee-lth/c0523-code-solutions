import { readFile } from 'node:fs/promises';

const files = process.argv.slice(2);
const contents = files.map((element) =>
  readFile(element, 'utf8')
);

async function readFileFunc() {
  try {
    const p = await Promise.all(contents);
    p.forEach((element) => console.log(element));
  } catch (err) {
    console.log('Error:', err.message);
  }
}

if (files.length > 0) {
  readFileFunc(files);
} else {
  console.log('Invalid file path(s).');
}
