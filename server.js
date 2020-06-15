const express = require('express');
const dotenv = require('dotenv');

const colors = require('colors');

// Lode env vars
dotenv.config({ path: './config/config.env' });

// Route files
const sportsclubs = require('./routes/sportsclubsRoutes');

const app = express();

// Mount the router
app.use('/api/v1/sportsclubs', sportsclubs);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});
