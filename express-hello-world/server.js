import express from 'express';

const app = express();

// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next();
// });



app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, worldx2');
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});
