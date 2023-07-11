import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArr = [];
  for (const grade in grades) {
    gradesArr.push(grades[grade]);
  }
  res.json(gradesArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send('Missing request body');
  } else {
    const data = req.body;
    data.id = nextId;
    nextId++;
    grades[data.id] = data;
    res.status(201).send(data);
  }
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
