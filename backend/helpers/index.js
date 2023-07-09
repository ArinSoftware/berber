import mongoose from 'mongoose';

const validateObjectId = (serviceId, res) => {
  if (!mongoose.Types.ObjectId.isValid(serviceId)) {
    const error = new Error('Service ID is not valid');

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const notFoundError = (res, msg) => {
  return res.status(404).json({ success: false, message: msg });
};

export { validateObjectId, notFoundError };
