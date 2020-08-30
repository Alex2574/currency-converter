const mongoose = require('mongoose');
const CurrencyModelSchema = new mongoose.Schema({
  array: {
    type: JSON,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const CurrencyModel = mongoose.model('CurrencyModel', CurrencyModelSchema)

module.exports = { CurrencyModel };
