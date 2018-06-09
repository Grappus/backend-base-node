/*
@author: Ankur Jat (ankur@grappus.com)
@created: 18th Dec 2017 7:30 pm
@summary: This middleware will secure cronjobs
*/


// Middleware, this will validate authentication token for cronjobs.
module.exports = function(request, response, next){
  if (request.query.password == process.env.CRONJOB_AUTH) {
    next();
  } else {
    return response.sendStatus(401);
  }
};
