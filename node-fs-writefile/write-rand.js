import { writeFile } from 'node:fs/promises';

async function writeFileFunc() {
  try {
    const randomNum = String(Math.random());
    await writeFile('random.txt', randomNum + '\n');
  } catch (err) {
    console.log('Error:', err.message);
  }
}

writeFileFunc();
