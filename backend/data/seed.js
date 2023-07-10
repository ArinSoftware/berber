import dotenv from 'dotenv';
import connectDB from '../config/db.js';
import Service from '../models/Service.js';
import { services } from './services.js';

dotenv.config();

await connectDB();

async function seedDB() {
  try {
    await Service.insertMany(services);
    console.log('Services inserted to the DB');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

async function clearDB() {
  try {
    await Service.deleteMany();
    console.log('Services deleted from the DB');
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

if (process.argv[2] === '--import') {
  seedDB();
} else {
  clearDB();
}
