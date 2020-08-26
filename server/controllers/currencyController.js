exports.getCurrentFxRates = function (req, res) {
  try {
    res.status(200).json('getPostsData');
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};

