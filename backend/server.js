import express from 'express';
import connectDB from './config/db.js';
import usersRoute from './routes/usersRoute.js';

const PORT = 3000;

const startServer = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Create the Express server
    const server = express();
    server.use('/api/v1/users', usersRoute);

    // Start the server
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
