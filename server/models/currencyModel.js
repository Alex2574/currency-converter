const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();


const CurrencyModelSchema = new mongoose.Schema({
  array: {
    type: JSON,
    required: true,
  },
});

const CurrencyModel = mongoose.model('CurrencyModel', CurrencyModelSchema)

module.exports = { CurrencyModel };
