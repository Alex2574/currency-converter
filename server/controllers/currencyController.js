const axios = require('axios');
const parser = require('xml2json');
const CurrencyModel = require('../models/currencyModel.js').CurrencyModel;



exports.saveCurrencyFxRates = async function (req, res) {
  try {
    const currencyRates = await getCurrentRates();

    await saveToDB(parserToJson(currencyRates), res);
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};

//DB call
async function saveToDB(json, res) {
  const currencyModel = new CurrencyModel({
    array: json.FxRates.FxRate,
  });
  currencyModel.save(currencyModel)
    .then(() => res.status(201).send({ status: 200, message: 'success' }))
    .catch((err) => res.status(400).send(err));

};

async function getCurrentRates() {
  const res = await axios.get('http://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=EU');
  return res.data;
}

function parserToJson(xml) {
  const options =
  {
    object: true,
    reversible: false,
    coerce: false,
    sanitize: true,
    trim: true,
    arrayNotation: false,
    alternateTextNode: false
  };
  return parser.toJson(xml, options);
}