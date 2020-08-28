const express = require('express');
const router = express.Router()
const currencyController = require('../controllers/currencyController');

router.get('/saveCurrentFxRates', currencyController.saveCurrencyFxRates);
router.get('/getCurrencyFxRates', currencyController.getCurrencyFxRates);

module.exports = router;