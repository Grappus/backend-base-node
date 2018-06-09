/*
@author: Ankur Jat
@summary: This module will create an eventEmitter to write data in log file and
  in stdout as well.
*/
let winston = require('winston');
require('winston-loggly-bulk');


// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV === 'production' || process.env.ENV === 'PROD') {
  winston.add(winston.transports.Loggly, {
    token: process.env.LOGGLY_TOKEN,
    subdomain: process.env.LOGGLY_SUBDOMAIN,
    tags: ['scio-' + process.env.ENV],
    json:true
  });
} else {
  winston.add(winston.transports.File, {
    name : 'UNIQUE_NAME_HERE',
    level: 'info',
    filename: 'logs/logs.log',
    format: JSON,
    transports: [
      new (winston.transports.Console)(),
    ]
  });
}

module.exports = winston;
