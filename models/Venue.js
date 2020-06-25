const mongoose = require('mongoose');

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

const Venu = mongoose.model('Venu', VenuSchemaI);

module.exports = Venu;
