import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => res.send("<h1>It's works!</h1>"));

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
