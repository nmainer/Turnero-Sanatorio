import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
