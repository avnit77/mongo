const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  petals: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  color: {
    type: String,
    required: true,
  },
  perrenial: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Flower', schema);
