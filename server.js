const express = require('express');
const logger = require('morgan');
//const foods = require('./routes/foods') ;
const accounts = require('./routes/accounts');
const users = require('./routes/users');
const goals = require('./routes/goals');
const sessions = require('./routes/sessions');
const emotions = require('./routes/emotions');
const mp3 = require('./routes/mp3');
const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
var jwt = require('jsonwebtoken');
const app = express();

app.use(express.static('vue/dist'))

app.set('secretKey', 'nodeRestApi'); // jwt secret token
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended: false}));

// app.get('/', function(req, res){
// res.json({"tutorial" : "Build REST API with node.js"});
// });
// public route
app.use('/api/accounts', accounts);
app.use('/api/users', users);
app.use('/api/goals', goals);
app.use('/api/sessions', sessions);
app.use('/api/emotions', emotions);
app.use('/api/mp3', mp3);
// private route
//app.use('/api/foods', validateUser, foods);
app.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});
function validateUser(req, res, next) {
  jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    if (err) {
      res.json({status:"error", message: err.message, data:null});
    }else{
      // add user id to request
      req.body.userId = decoded.id;
      next();
    }
  });
  
}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
 let err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// handle errors
app.use(function(err, req, res, next) {
 console.log(err);
 
  if(err.status === 404)
   res.status(404).json({message: "Not found"});
  else 
    res.status(500).json({message: "Something looks wrong :( !!!"});
});
app.listen(3000, function(){
 console.log('Node server listening on port 3000');
});
