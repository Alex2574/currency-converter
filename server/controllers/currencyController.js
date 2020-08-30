const axios = require('axios');
const parser = require('xml2json');
const CurrencyModel = require('../models/currencyModel.js').CurrencyModel;
const date = new Date().toISOString().slice(0, 10);

exports.saveCurrencyFxRates = async function (req, res) {
  try {
    const currencyRates = await getCurrentRates();
    await saveToDB(parserToJson(currencyRates), res);
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};

exports.getCurrencyFxRates = async function (req, res) {
  try {
    await getFromDB(res);
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
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

//DB call
async function saveToDB(json, res) {
  const currencyModel = new CurrencyModel({
    array: formatForCurrencyArray(json.FxRates.FxRate),
    date: new Date().toISOString().slice(0, 10),
  });
  currencyModel.save(currencyModel)
    .then((result) => res.status(201).send(result.array))
    .catch((err) => res.status(400).send(err));
};

function formatForCurrencyArray(data) {
  let newArray = [];
  data.forEach(element => {
    newArray.push({ Dt: element.Dt, CcyAmt: element.CcyAmt[1] })
  });
  return newArray;
};

async function getFromDB(res) {
  CurrencyModel.find({ date })
    .limit(1)
    .then((result) => {
      if (result[0]) {
        return res.status(201).send(result[0].array);
      }
      res.status(201).send(null)
    })
    .catch((err) => res.status(400).send(err));
};