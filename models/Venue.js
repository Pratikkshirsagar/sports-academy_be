const mongoose = require('mongoose');
const slugify = require('slugify');
const geocoder = require('../utils/geocoder');

const VenuSchemaI = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Venu name is required'],
    unique: true,
    trime: true,
    maxlength: [40, 'Venu name must have less or equal then 40 characters'],
    minlength: [5, 'Venu name must have more or equal then 5 characters'],
  },
  slug: {
    type: String,
  },
  sportType: {
    type: String,
    required: true,
  },
  typeOfSlotBooking: {
    type: String,
    enum: ['whole', 'individual'],
    required: true,
  },
  maxPersonPerSlot: {
    type: Number,
    required: [true, 'Must have a group size'],
  },
  availableSlotPerDayMorning: {
    type: Array,
    default: ['6 - 7', '7 - 8', '8 - 9', '9 - 10', '10 - 11', '11 - 12'],
  },
  availableSlotPerDayAfternoon: {
    type: Array,
    default: ['12 - 1', '1 - 2', '2 - 3', '3 - 4', '4 - 5'],
  },
  availableSlotPerDayEvening: {
    type: Array,
    default: ['5 - 6', '6 - 7', '7 - 8', '9 - 10', '10 - 11', '11 - 12'],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: false,
    },
    coordinates: {
      type: [Number],
      required: false,
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 5'],
  },
  price: {
    type: Number,
    required: [true, 'Venu must have a price'],
  },
  photo: {
    type: String,
    default: 'mo-photo',
  },
  timeToOpen: {
    type: String,
    default: '6:00Am',
  },
  timeToClose: {
    type: String,
    default: '12:00Am',
  },
  closeWeekDays: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

// Create bootcamp slug from the name
VenuSchemaI.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Geocode & create location field
VenuSchemaI.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress,
    street: loc[0].streetName,
    city: loc[0].city,
    state: loc[0].stateCode,
    zipcode: loc[0].zipcode,
    country: loc[0].countryCode,
  };

  // Do not save address
  this.address = undefined;
  next();
});

const Venu = mongoose.model('Venu', VenuSchemaI);

module.exports = Venu;
