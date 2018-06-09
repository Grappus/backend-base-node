/*
@author: Ankur Jat (ankur@grappus.com)
@summary: contains SMS related utilities
*/
const msg91 = require('msg91')(process.env.MSG91_API_KEY,
  process.env.MSG91_SENDER_ID, process.env.MSG91_ROUTE_NO);


// Send message to user
let sendSMS = function(contactNumber, message, callback) {
  msg91.send(contactNumber, message, callback);
};


module.exports = {
  sendSMS: sendSMS
};
