import { a } from 'folder_a';
import express from 'express';
import { pad } from 'mod_a';
const app = express();
app.get('/', (req, res) => {
  res.json({ result: 'ok!', a, p: pad('a', 10) });
});

app.listen(3000, () => {
  console.log('Server is running!');
});
