const express = require('express');
const router = express.Router()
const currencyController = require('../controllers/currencyController');

router.get('/currentFxRates', currencyController.saveCurrencyFxRates);


module.exports = router;