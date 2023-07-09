import { users } from '../data/users.js';
import Service from '../models/Service.js';

/**
 * @desc    Create a service
 * @route   POST /api/v1/services/
 * @access  Private
 **/
const createService = async (req, res) => {
  try {
    const service = await Service.create({ ...req.body });

    res.status(201).json({
      success: true,
      message: 'Service created successfully',
      service,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllServices = (req, res) => {
  res.json(users);
};

export { getAllServices, createService };
