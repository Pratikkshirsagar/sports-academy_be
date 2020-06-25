const express = require('express');
const {
  getAllVenue,
  getSingleVenue,
  createVenue,
  updateVenue,
  deleteVenue,
} = require('../controllers/Venue1Controller');

const router = express.Router();

router.route('/').get(getAllVenue).post(createVenue);

router.route('/:id').get(getSingleVenue).put(updateVenue).delete(deleteVenue);

module.exports = router;
