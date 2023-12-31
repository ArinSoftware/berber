import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import servicesRoutes from './routes/servicesRoutes.js';

const PORT = 3000;

const startServer = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Create the Express server
    const server = express();

    // Configure CORS
    server.use(
      cors({
        origin: function (origin, callback) {
          if (['http://localhost:5173', undefined].includes(origin)) {
            // Permit the coection
            callback(null, true);
          } else {
            callback(new Error('CORS Error'));
          }
        },
      })
    );

    // Use built-in middleware to parse JSON-encoded request bodies
    server.use(express.json());

    server.use('/api/v1/services', servicesRoutes);

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
