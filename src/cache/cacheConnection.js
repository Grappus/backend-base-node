/*
@author: Ankur Jat (ankur@grappus.com)
@created: 22nd Nov 2017 5:04 pm
@summary: This file will make connectioon to all redis databases and export them
  to use globally
*/


// Import
const redis = require('redis');
const winston = require('../utils/utilLogger');


const redisUserClient = redis.createClient(process.env.REDIS_USER_CLIENT_URL);
redisUserClient.on("error", function (error) {
    winston.log("error", {error: error, action: 'redis connection error'});
    throw(error);
});


redisUserClient.on("connect", function (error) {
    winston.log("info", {info: 'connection connected to redis user client'});
});


redisUserClient.on("ready", function (error) {
    winston.log("info", {info: 'connection is ready to redis user client'});
});


// Export on module level.
module.exports = {
  redisUserClient
};
