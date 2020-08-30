const UserActivityModel = require('../models/userActivityModel.js').UserActivityModel;

exports.saveUserActivity = async function (req, res) {
  try {
    await saveToDB(req.body, res);
  } catch (err) {
    res.status(500).json({ status: 500, message: 'err.message' });
  }
};

async function saveToDB(json, res) {
  const userActivityModel = new UserActivityModel({
    date: new Date().toISOString().slice(0, 10),
    userId: json.userId,
    logInfo: json.logInfo
  });
  userActivityModel.save(userActivityModel)
    .then((result) => res.status(201).send(result.array))
    .catch((err) => res.status(400).send(err));
};


