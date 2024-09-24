import express from 'express';
const app = express();
const port = process.env.PORT || 3000; // Heroku's PORT or default to 3000

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log the correct port
});
