const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'showing all the gameslot',
  });
});

router.get('/:id', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'showing one gameslot',
  });
});

router.post('/', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'added a gameslot',
  });
});

router.delete('/:id', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'deleted one gameslot',
  });
});

module.exports = router;
