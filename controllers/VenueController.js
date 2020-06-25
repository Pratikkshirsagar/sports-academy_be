const ErrorResponse = require('../utils/errorResponse');
const Venu = require('../models/Venue');

exports.getAllVenue = async (req, res, next) => {
  try {
    const venues = await Venu.find();

    res.status(200).json({
      success: true,
      count: venues.length,
      data: venues,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSingleVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findById(req.params.id);

    if (!venue) {
      return next(
        new ErrorResponse(`Venue not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    next(error);
  }
};

exports.createVenue = async (req, res, next) => {
  try {
    const venue = await Venu.create(req.body);

    res.status(201).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!venue) {
      return next(
        new ErrorResponse(`Venue not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(201).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findByIdAndDelete(req.params.id);

    if (!venue) {
      return next(
        new ErrorResponse(`Venue not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};
