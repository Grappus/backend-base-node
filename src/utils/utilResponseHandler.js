/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains Response handler handy methods
*/
const controllerConstant = require('../controllers/controllerConstant');


// send error response to client
let errorResponse = function(response, statusCode=406, error=null,
  message='Unable to perform this time',
  errorCode=controllerConstant.ERROR_CODES.UNABLE_TO_PERFORM) {
  return response.status(statusCode).json({
    error: error,
    message: message,
    errorCode: errorCode
  });
};


module.exports = {
  errorResponse: errorResponse
};
