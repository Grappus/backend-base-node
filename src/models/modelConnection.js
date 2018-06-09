/*
@author: Ankur Jat (ankur@grappus.com)
@created: 18th Dec 2017 7:30 am
@summary: Base model class that will contain all connection related methods and
  export them on module level
*/


const winston = require('../utils/utilLogger');


const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, function(error){
  if (error) {
    winston.log('error', {
    	error: error,
			action: 'modelConnection-connect',
      message: `Connection error on port ${process.env.MONGO_URI}`
		});
    throw(error);
  } else {
    winston.log('info', {
			action: 'modelConnection-connect',
      info: `Connection mongo established on port ${process.env.MONGO_URI}`
		});
  }
});


// Create connection object.
const db = mongoose.connection;


db.on('error', function(error) {
  error ? winston.log('error', {
  	message: `connection error on: ${process.env.MONGO_URI}
      error is: ${error.message}`,
		action: 'modelConnection-error',
    error
	}) : '';
});


db.on('index', function(error, message) {
  error ? winston.log("error", {
    error,
    action: 'modelConnection-index'
  }) : '';
})


mongoose.set('debug', (process.env.MONGOOSE_DEBUG === 'true')? true : false);


// Export on module level.
module.exports = db;
