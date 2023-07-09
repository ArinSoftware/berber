import express from 'express';
import * as servicesControllers from '../controllers/servicesControllers.js';

const router = express.Router();

router
  .route('/')
  .get(servicesControllers.getAllServices)
  .post(servicesControllers.createService);

export default router;
