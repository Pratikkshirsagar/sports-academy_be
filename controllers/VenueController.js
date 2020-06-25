const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Venu = require('../models/Venue');

exports.getAllVenue = asyncHandler(async (req, res, next) => {
  const venues = await Venu.find();

  res.status(200).json({
    success: true,
    count: venues.length,
    data: venues,
  });
});

exports.getSingleVenue = asyncHandler(async (req, res, next) => {
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
});

exports.createVenue = asyncHandler(async (req, res, next) => {
  const venue = await Venu.create(req.body);

  res.status(201).json({
    success: true,
    data: venue,
  });
});

exports.updateVenue = asyncHandler(async (req, res, next) => {
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
});

exports.deleteVenue = asyncHandler(async (req, res, next) => {
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
});
