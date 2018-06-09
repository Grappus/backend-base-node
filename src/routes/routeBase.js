/*
@author: Ankur Jat (ankur@grappus.com)
@created: 18th Dec 2017 4:03 am
@summary: Main route file. This will work as a collaborator for all route files.
  This will export router on module level.
*/


const express = require('express');
const route = express.Router();


// const routeUpload = require('./routeUpload');


// Add routes
// route.use('/upload', routeUpload);


// export related route
module.exports = route
