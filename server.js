var path = require('path');

// Load .env file
require('dotenv').load({
  path: path.join(__dirname, './.env'),
  silent: true
});
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');


require('./api/model')

mongoose.connect(`mongodb://localhost/praipsDB`, { useMongoClient: true }, function (err) {
  if (err) {
     throw new Error(err);
  }
  else {
    console.log("MongoDB is now Connected")
  }
});

app.use(cors());

//body parser middleware
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(express.static('./client/build'));

app.use('/api', require('./api'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


app.listen(process.env.PORT,function () {
  console.log('Running server on ' + process.env.PORT);
});