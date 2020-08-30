const mongoose = require('mongoose');

const UserActivityModelSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  logInfo: {
    type: String,
    required: true,
  },
});

const UserActivityModel = mongoose.model('UserActivityModel', UserActivityModelSchema)
module.exports = { UserActivityModel };