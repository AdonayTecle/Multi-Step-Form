import express from 'express';
import apiRouter from './routes/api'; // Import the API router from api.ts
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Serve the React app from the client/build directory
app.use(express.static(path.join(__dirname, '../../client/build')));

// Mount the API router under the /api path
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
