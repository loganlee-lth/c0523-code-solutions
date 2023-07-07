import { readFile, writeFile } from 'node:fs/promises';


switch (process.argv[2]) {
  case 'read':
    readFileFunc();
    break;
}

async function readFileFunc() {
  try {
    const content = JSON.parse(await readFile('data.json', 'utf8')).notes;
    for (const [key, value] of Object.entries(content)) {
      console.log(`${key}: ${value}`);
    }
  } catch (err) {
    console.log('Error:', err);
  }
}
