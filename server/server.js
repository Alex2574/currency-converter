const app = require('./app');
const http = require('http');
const PORT = process.env.PORT || 5000;

http.createServer(app).listen(PORT);
console.log('Listening on port: ' + PORT);