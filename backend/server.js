import express from 'express';
import usersRoute from './routes/usersRoute.js';

const app = express();
const PORT = 3000;

app.use('/api/v1/users', usersRoute);

app.listen(PORT, () => {
  console.log('Server started to listed port: ', PORT);
});
