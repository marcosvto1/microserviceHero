const mongoose = require('mongoose');

const CategorieSchema = new mongoose.Schema({
  name: String
});

module.exports = mongoose.model('categories', CategorieSchema);