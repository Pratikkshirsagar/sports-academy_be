const express = require('express');
const {
  getAllSportsClub,
  getSingleSportsClub,
  createSportsClub,
  updateSportsClub,
  deleteSportsClub,
} = require('../controllers/sportsclubController');

const router = express.Router();

router.route('/').get(getAllSportsClub).post(createSportsClub);
router
  .route('/:id')
  .get(getSingleSportsClub)
  .put(updateSportsClub)
  .delete(deleteSportsClub);

module.exports = router;
