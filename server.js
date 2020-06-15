const express = require('express');
const dotenv = require('dotenv');

const colors = require('colors');

// Lode env vars
dotenv.config({ path: './config/config.env' });
const app = express();

app.get('/api/v1/slotgame', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'showing all the gameslot',
  });
});

app.get('/api/v1/slotgame/:id', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'showing one gameslot',
  });
});

app.post('/api/v1/slotgame', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'added a gameslot',
  });
});

app.delete('/api/v1/slotgame/:id', (req, res, next) => {
  res.status(200).json({
    status: 'success',
    msg: 'deleted one gameslot',
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});
