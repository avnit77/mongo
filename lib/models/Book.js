const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    required: true,
    min: 0,
    max: 1000
  },
  genre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Book', schema);
