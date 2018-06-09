/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains constants for controller
*/
/*
Common const for consistency between RESPONSE_CODES, ERRORS and ERROR_CODES
*/
const CONTENT_NOT_EXIST = 'Content is not exist';
const DELETE_CONTENT = 'deleteContent';
const ENTITY_CREATED = 'entityCreated';
const INTERNAL_SERVER_ERROR = 'internalServerError';
const INVALID_INPUT = 'invalidInput';
const INVALID_TOKEN = 'invalidToken';
const OK_REQUEST = 'okRequest';
const UNABLE_TO_PERFORM = 'unableToPerform';
const UNAUTHORIZED_ACCESS = 'unauthorizedAccess';

let RESPONSE_CODES = {};
RESPONSE_CODES[CONTENT_NOT_EXIST] = 404;
RESPONSE_CODES[DELETE_CONTENT] = 200;
RESPONSE_CODES[ENTITY_CREATED] = 201;
RESPONSE_CODES[INTERNAL_SERVER_ERROR] = 500;
RESPONSE_CODES[INVALID_INPUT] = 400;
RESPONSE_CODES[INVALID_TOKEN] = 401;
RESPONSE_CODES[OK_REQUEST] = 200;
RESPONSE_CODES[UNABLE_TO_PERFORM] = 406;
RESPONSE_CODES[UNAUTHORIZED_ACCESS] = 403;

let ERRORS = {};
ERRORS[CONTENT_NOT_EXIST] = 'Content not exist';
ERRORS[DELETE_CONTENT] = 'The content has been succesfully deleted'
ERRORS[INTERNAL_SERVER_ERROR] = 'Some technical error occured. We are looking into it';
ERRORS[INVALID_INPUT] = 'Invalid input fields';
ERRORS[INVALID_TOKEN] = 'Invalid/Expired token';
ERRORS[UNABLE_TO_PERFORM] = 'Unable to perform this time. Please try after some time';
ERRORS[UNAUTHORIZED_ACCESS] = 'You are not authorized to perform this access';


const ERROR_CODES = {};
ERROR_CODES[CONTENT_NOT_EXIST] = 40401;
ERROR_CODES[INTERNAL_SERVER_ERROR] = 50001;
ERROR_CODES[INVALID_INPUT] = 10003;
ERROR_CODES[INVALID_TOKEN] = 10005;
ERROR_CODES[UNABLE_TO_PERFORM] = 40006;
ERROR_CODES[UNAUTHORIZED_ACCESS] = 10004;

module.exports = {
  CONTENT_NOT_EXIST,
  DELETE_CONTENT,
  ENTITY_CREATED,
  ERRORS,
  ERROR_CODES,
  INTERNAL_SERVER_ERROR,
  INVALID_INPUT,
  INVALID_TOKEN,
  OK_REQUEST,
  RESPONSE_CODES,
  UNABLE_TO_PERFORM,
  UNAUTHORIZED_ACCESS,
};
