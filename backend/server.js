import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  let user = {
    id: 1,
    name: 'Gurcan',
  };
  res.json(user);
});

app.listen(PORT, () => {
  console.log('Server started to listed port: ', PORT);
});
