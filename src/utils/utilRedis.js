const redis = require('../models/modelConnection').redisConnection;

let getById = function(id, callback){
  redis.hmgetall(id, callback);
};

let setById = function(id, data, callback){
  redis.hmset(id, data, callback);
};

module.exports = {
  getById,
  setById
};