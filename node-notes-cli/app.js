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

// Display all notes in the data.json file
async function readNoteFunc() {
  try {
    const content = JSON.parse(await readFile('data.json', 'utf8'));
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
    const content = JSON.parse(await readFile('data.json', 'utf8'));
    content.notes[content.nextId] = userInput[1];
    content.nextId++;
    await writeFile('./data.json', JSON.stringify(content, null, 2));
  } catch (err) {
    console.log('Error:', err);
  }
}

// Delete a note by its id
async function deleteNoteFunc() {
  try {
    const content = JSON.parse(await readFile('data.json', 'utf8'));
    if (!content.notes[userInput[1]]) {
      console.log('ID not found. Please enter a valid ID.');
    } else {
      delete content.notes[userInput[1]];
      await writeFile('./data.json', JSON.stringify(content, null, 2));
    }
  } catch (err) {
    console.log('Error:', err);
  }
}

// Replace a note given its unique id with the new note
async function updateNoteFunc() {
  try {
    const content = JSON.parse(await readFile('data.json', 'utf8'));
    if (!(userInput[1] in content.notes)) {
      console.log(`ID ${userInput[1]} not found.`);
    } else {
      content.notes[userInput[1]] = userInput[2];
      await writeFile('./data.json', JSON.stringify(content, null, 2));
    }
  } catch (err) {
    console.log('Error:', err);
  }
}
