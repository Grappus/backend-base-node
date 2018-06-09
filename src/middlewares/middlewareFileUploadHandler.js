/*
@author: Ankur Jat (ankur@grappus.com)
@created: 18th Dec 2017 7:21 pm
@summary: This middleware will upload file and add their URL in request object
@TODO: Upload file to S3 if environment is PROD
*/


const uuid = require("uuid4");


module.exports = function (request, response, next) {
  if (!request.files) {
      next();
      return;
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the
  // uploaded file
  let file = request.files;
  let fileName = uuid() + file.name.split(' ').join('+');

  // The name of the input field (i.e. "sampleFile") is used to retrieve the
  // uploaded file
  let sampleFile = request.files.file;
  let fileName = uuid();

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(__dirname + '/../static/' + fileName, function(error) {
    if (error) {
      response.status(500).send(error);
    } else{
      request.fileUrl = process.env.HOST_PROTOCOL + process.env.HOST_IP +
        "/static/" + fileName;
      next();
    }
  });
};
