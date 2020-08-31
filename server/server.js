const app = require('./app');
const http = require('http');
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DEV || 'mongodb://mongo:27017/convert-currency';
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(DB_URI).then(() => {
    console.log('Listening on port: ' + PORT);
    http.createServer(app).listen(PORT);
});