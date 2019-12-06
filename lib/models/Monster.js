const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  eyes: {
    type: Number,
    required: true
  },
  limbs: {
    type: Number,
    required: true
  },
  unDead: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Monster', schema);
