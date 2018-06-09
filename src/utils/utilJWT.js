/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains methods to generate and verify JWT
*/
const jwt = require('jsonwebtoken');
const winston = require('./utilLogger');


// validate JWT data
var verifyJWTToken = function(data, secretKey) {
  try {
    return {
      error: null,
      data: jwt.verify(data, secretKey || process.env.USER_AUTH_JWT_TOKEN)
    };
  } catch (error) {
    winston.log('error', {error: error, action: 'verifyJWTToken'});
    return {
      error: error,
      data: null
    };
  }
};

var generateJWTToken = function(data, secretKey){
  try {
    return {
      error: null,
      token: jwt.sign(data, secretKey || process.env.USER_AUTH_JWT_TOKEN)
    };
  } catch (error) {
    winston.log('error', {error: error, action: 'generateJWTToken'});
    return {
      error: error,
      token: null
    };
  }
};

module.exports = {
  verifyJWTToken,
  generateJWTToken
};
