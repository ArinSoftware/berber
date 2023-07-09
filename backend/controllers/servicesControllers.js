import { users } from '../data/users.js';
import Service from '../models/Service.js';
import * as helpers from '../helpers/index.js';

/**
 * @desc    Create a service
 * @route   POST /api/v1/services/
 * @access  Private
 **/
const createService = async (req, res) => {
  if (Object.values(req.body).includes('')) {
    const error = new Error('All fields are required');

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }

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

/**
 * @desc    Get a service
 * @route   GET /api/v1/services/:id
 * @access  Public
 **/
const getServiceById = async (req, res) => {
  const { serviceId } = req.params;

  if (helpers.validateObjectId(serviceId, res)) return;

  try {
    const service = await Service.findById(serviceId);
    if (!service) {
      return helpers.notFoundError(res, 'Service is not exist');
    }
    return res.json({
      success: true,
      message: 'Service info received successfully',
      service,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * @desc    Update a service
 * @route   PUT /api/v1/books/:servicesId
 * @access  Private
 **/
const updateService = async (req, res) => {
  let { name, price } = req.body;
  const serviceId = req.params.serviceId;

  if (helpers.validateObjectId(serviceId, res)) return;

  try {
    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      { name, price },
      { new: true }
    );

    if (!updatedService) {
      return res
        .status(404)
        .json({ success: false, message: 'Service not found' });
    }

    return res.json({
      success: true,
      message: 'Service info updated successfully',
      updatedService,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Delete a book
 * @route   DELETE /api/v1/books/:id
 * @access  Private
 **/
const deleteService = async (req, res) => {
  const serviceId = req.params.serviceId;

  if (helpers.validateObjectId(serviceId, res)) return;

  const service = await Service.findById(serviceId);

  if (!service) {
    return helpers.notFoundError(res, 'Service is not exist');
  }

  try {
    await service.deleteOne();
    return res.json({ success: true, message: 'Service deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getAllServices = (req, res) => {
  res.json(users);
};

export {
  getAllServices,
  createService,
  getServiceById,
  updateService,
  deleteService,
};
