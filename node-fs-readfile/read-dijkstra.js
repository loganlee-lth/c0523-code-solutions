import { readFile } from 'node:fs/promises';

async function readFileFunc() {
  try {
    const file = await readFile('dijkstra.txt', 'utf8');
    console.log(file);
  } catch (err) {
    console.log('Error:', err.message);
  }
}

readFileFunc();
