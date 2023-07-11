import { readFile, writeFile } from 'node:fs/promises';
import express from 'express';

const app = express();
app.use(express.json());

// Abstraction for asynchronous readFile
async function readData() {
  return JSON.parse(await readFile('data.json', 'utf8'));
}

// Abstraction for asynchronous writeFile
async function writeData(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');
}

// Abstraction for error handling
function handleError(res, err) {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
}

// GET request. Client receives a JSON array of note objects
// If there are no notes, they receive an empty array
app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notesArr = [];
    for (const note in data.notes) {
      notesArr.push(data.notes[note]);
    }
    res.status(200).json(notesArr);
  } catch (err) {
    handleError(res, err);
  }
});

// GET request. Client receives a JSON note object based on ID
// Route handler checks for a non-positive integer and if the note with the given ID exists
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    res.status(200).json(data.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

// POST request. Client creates a new JSON note object
// Route handler checks for missing content property in the request body
app.post('/api/notes', async (req, res) => {
  try {
    if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field' });
      return;
    }

    const data = await readData();
    const note = {
      id: data.nextId++,
      content: req.body.content,
    };
    data.notes[note.id] = note;

    await writeData(data);
    res.status(201).json(note);
  } catch (err) {
    handleError(res, err);
  }
});

// DELETE request. Client deletes a note based on ID
// Route handler checks for a non-positive integer and if the note with the given ID exists
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    delete data.notes[id];

    await writeData(data);
    res.sendStatus(204);
  } catch (err) {
    handleError(res, err);
  }
});

// PUT request. Client updates a note based on ID
// Route handler checks for a non-positive integer, given ID and missing content property in the request body
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: 'id must be a positive integer' });
      return;
    } else if (!req.body.content) {
      res.status(400).json({ error: 'content is a required field.' });
      return;
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
      return;
    }
    data.notes[id].content = req.body.content;

    await writeData(data);
    res.status(200).json(data.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
