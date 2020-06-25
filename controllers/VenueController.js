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
    // res.status(400).json({
    //   success: false,
    //   error,
    // });
    next(error);
  }
};

exports.getSingleVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findById(req.params.id);

    if (!venue) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    next(error);
  }
};

exports.createVenue = async (req, res, mext) => {
  try {
    const venue = await Venu.create(req.body);

    res.status(201).json({
      success: true,
      data: venue,
    });
  } catch (err) {
    res.status(400).json({ success: false, err: err });
  }
};

exports.updateVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!venue) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(201).json({
      success: true,
      data: venue,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

exports.deleteVenue = async (req, res, next) => {
  try {
    const venue = await Venu.findByIdAndDelete(req.params.id);

    if (!venue) {
      return res.status(400).json({
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
