/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contain util methods for controllers.
*/
const controllerConstant = require('../controllers/controllerConstant');


let errorResponse = function(response, code, error, message) {
  return response.status(controllerConstant.RESPONSE_CODES[code]).json({
    error,
    message: message || controllerConstant.ERRORS[code],
    errorCode: controllerConstant.ERROR_CODES[code]
  });
};

// Python API Error response worked like this one
let errorResponseWithSuccess = function(response, code, error, message) {

  return response.status(controllerConstant.RESPONSE_CODES[code]).json({
    success: false,
    result: {},
    error: {
      error_message: message || controllerConstant.ERRORS[code],
      error_code: controllerConstant.ERROR_CODES[code],
      error: error || {},
    }
  });
};

let response = function(response, code, result) {
  if (result == null) {
    return response.sendStatus(controllerConstant.RESPONSE_CODES[code]);
  } else {
    return response.status(controllerConstant.RESPONSE_CODES[code]).json({
      result
    });
  }
};


module.exports = {
  errorResponse,
  errorResponseWithSuccess,
  response,
};
