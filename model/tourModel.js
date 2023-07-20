const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'], //validater
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'Atour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'Atour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'must have difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'a tour must have a price'],
  },
  priceDiscount: {
    type: Number,
  },
  summary: {
    type: String,
    required: [true, 'must have desc.'],
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageCover: {
    type: String,
    required: [true, 'must have coveImage'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
