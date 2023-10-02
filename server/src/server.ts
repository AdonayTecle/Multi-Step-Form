import express from 'express';
import apiRouter from './routes/api';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/build')));

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
