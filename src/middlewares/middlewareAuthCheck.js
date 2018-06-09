/*
@author: Ankur Jat (ankur@grappus.com)
@summary: This middleware will cover authentication of users in general.
*/
const controllerConstant = require('../controllers/controllerConstant');
const controllerUtil = require('../controllers/controllerUtil');
const modelConstant = require('../models/modelConstant');
const modelPermission = require('../models/modelPermission');
const modelUser = require('../models/modelUser');
const axios = require('axios');
const winston = require('winston');
const utilJWT = require('../utils/utilJWT');


/*
Middleware, this will validate authentication token for user profile.
*/
module.exports = function(request, response, next){
  let authToken = request.headers.authentication || request.headers.authorization;
  if (!authToken) {
    return response.sendStatus(controllerConstant.RESPONSE_CODES[
      controllerConstant.INVALID_TOKEN]);
  }
  if (authToken === process.env.INTERSERVER_UNIQUE_KEY){
    /*
      This checks if the request is from another Server
    */
    console.log("here")
    request.userType = modelConstant.UT_SUPER_ADMIN;
    request.permissions = modelPermission.PERMISSION_POLICY[modelConstant.UT_SUPER_ADMIN];
    process.env.DEFAULT_PAGE_SIZE = '800'
    return next();
  }
  else {
    let {error, data} = utilJWT.verifyJWTToken(authToken,
      process.env.USER_AUTH_JWT_TOKEN);
    if (error || !data) {
      error ? winston.log('error', {
        error: error,
        action: 'middlewareAuthCheck'
      }) : '';
      return response.sendStatus(controllerConstant.RESPONSE_CODES[
        controllerConstant.INVALID_TOKEN]);
    } else {
      modelUser.getById(data.id, (error, userObj)=> {
        if (error){
          console.log(error);
          return controllerUtil.errorResponseWithSuccess(response,
            controllerConstant.INVALID_TOKEN, error
          );
        } else if (!userObj){
          return controllerUtil.errorResponseWithSuccess(response,
            controllerConstant.INVALID_TOKEN,
          );
        } else {
          request.user = data;
          request.deviceId = data.deviceId;
          request.userType = userObj.userType;
          request.permissions = modelPermission
            .PERMISSION_POLICY[userObj.userType];
          return next();
        }
      })
    }
  }
};
