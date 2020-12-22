const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: {type: String, required: true},
  type: {type: String, required: true}
});

module.exports = mongoose.model('Word', wordSchema); // will create words collection

