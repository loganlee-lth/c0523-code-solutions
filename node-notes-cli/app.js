import { readFile, writeFile } from 'node:fs/promises';

const userInput = process.argv.slice(2);

switch (userInput[0]) {
  case 'read':
    readNoteFunc();
    break;
  case 'create':
    if (!userInput[1]) {
      console.log("Empty input. Please enter a note.");
    } else {
      createNoteFunc();
    }
    break;
  case 'delete':
    if (!userInput[1]) {
      console.log('Please enter a valid ID');
    } else {
      deleteNoteFunc();
    }
    break;
  case 'update':
    if (!userInput[2]) {
      console.log('Please enter a new note to update.')
    } else {
      updateNoteFunc();
    }
    break;
  default:
    console.log('Input not recognized. Please provide valid input.');
}

async function readData() {
  return JSON.parse(await readFile('data.json', 'utf8'));
}

async function writeData(content) {
  await writeFile('data.json', JSON.stringify(content, null, 2), 'utf8');
}

// Display all notes in the data.json file
async function readNoteFunc() {
  try {
    const content = await readData();
    for (const [key, value] of Object.entries(content.notes)) {
      console.log(`${key}: ${value}`);
    }
  } catch (err) {
    console.log('Error:', err);
  }
}

// Append new note with a unique id and increment next id
async function createNoteFunc() {
  try {
    const content = await readData();
    content.notes[content.nextId] = userInput[1];
    content.nextId++;
    await writeData(content);
  } catch (err) {
    console.log('Error:', err);
  }
}

// Delete a note by its id
async function deleteNoteFunc() {
  try {
    const content = await readData();
    if (!content.notes[userInput[1]]) {
      console.log('ID not found. Please enter a valid ID.');
    } else {
      delete content.notes[userInput[1]];
      await writeData(content);
    }
  } catch (err) {
    console.log('Error:', err);
  }
}

// Replace a note given its unique id with the new note
async function updateNoteFunc() {
  try {
    const content = await readData();
    if (!(userInput[1] in content.notes)) {
      console.log(`ID ${userInput[1]} not found.`);
    } else {
      content.notes[userInput[1]] = userInput[2];
      await writeData(content);
    }
  } catch (err) {
    console.log('Error:', err);
  }
}
