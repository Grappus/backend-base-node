/*
@author: Ankur Jat (ankur@grappus.com)
@created: 18th Dec 2017 7:08 pm
@summary: This middleware will track which request tooks how many ms to complete.
*/


const winston = require('../utils/utilLogger');
const uuid = require('uuid4');


// Middleware, this will track time to complete the request
module.exports = function(request, response, next){
  let startTime = +new Date();
  let url = request.url;
  let method = request.method;
  let requestID = uuid();
  winston.log("info", {
    info: `REQUEST: ${requestID} ${url}`,
    url,
    method,
    ip: request.headers['x-forwarded-for'],
    action: 'middlewareResponseTracker-request',
    requestID
  });

  response.on("finish", function(){
    winston.log("info", {
      info: `RESPONSE: ${requestID} ${url}`,
      url,
      method,
      action: 'middlewareResponseTracker-response',
      requestID,
      time: (+new Date() - startTime)
    });
  });

  next();
};
