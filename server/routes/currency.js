const express = require('express');
const router = express.Router()
const currencyController = require('../controllers/currencyController');

router.use('/currentFxRates', currencyController.getCurrentFxRates);

module.exports = router;