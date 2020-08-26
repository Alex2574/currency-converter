const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
// const postRouter = require('./routes/post');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', postRouter);
app.get('/currentFxRates', (req, res) => {
  res.status(200).send({test:'text'})
});

module.exports = app;
