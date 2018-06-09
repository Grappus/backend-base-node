/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains cryptic helper function
*/
const crypto = require('crypto');


// Hash string method using salt and sha512 method
var hashString = function(string, salt){
  if (!salt){
    salt = process.env.SECRET;
  }
  return crypto.createHmac('sha512', salt).update(string).digest('hex');
};



module.exports = {
  hashString: hashString,
};
