const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Cats',
              new Schema({ id: Number, name: String}),
              'category');
