/*
@author: Ankur Jat (ankur@grappus.com)
@summary: contains Email related utilities
*/
const ses = require('node-ses');
const client = ses.createClient({ key: process.env.AWS_SES_API_KEY,
  secret: process.key.AWS_SES_SECRET_KEY });

const DEFAULT_MAIL_SENDER = process.env.DEFAULT_MAIL_SENDER;

var sendEmail = function(toAddr, subject, body, callback) {
  client.sendEmail({
    to: toAddr,
    from: DEFAULT_MAIL_SENDER,
    cc: null,
    bcc: [],
    subject: subject,
    message: body.toString('base64'),
    altText: 'html'
  }, callback);
};


module.exports = {
  sendEmail: sendEmail
};
