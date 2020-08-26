const axios = require('axios');

exports.getCurrentFxRates = async function (req, res) {
  try {
    await getCurrentRates();
    res.status(200).json('getPostsData');
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};

async function getCurrentRates() {
  const res = await axios.get('http://www.lb.lt/webservices/FxRates/FxRates.asmx/getCurrentFxRates?tp=EU');
  let data = res.data;
  console.log(data);
}