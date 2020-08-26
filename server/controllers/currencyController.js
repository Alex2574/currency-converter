const axios = require('axios');
const parser = require('xml2json');

exports.getCurrentFxRates = async function (req, res) {
  try {
    const currencyRates = await getCurrentRates();
    res.status(200).json(parserToJson(currencyRates));
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