const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// Lode env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const sportsclub = require('./routes/sportsclubRoutes');
const venue = require('./routes/Venue1Routes');

const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount the router
app.use('/api/v1/venue', venue);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
  );
});
