const express = require('express');
const router = express.Router()
const currencyController = require('../controllers/currencyController');
const userActivityController = require('../controllers/userActivityController');

router.get('/saveCurrentFxRates', currencyController.saveCurrencyFxRates);
router.get('/getCurrencyFxRates', currencyController.getCurrencyFxRates);
router.post('/saveUserActivity', userActivityController.saveUserActivity);

module.exports = router;