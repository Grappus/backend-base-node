/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains Number format related methods
*/
// convert decimal into 2 float points
let decimalFormat = function(number) {
  return parseFloat(Math.round(number * 100) / 100).toFixed(2);
};


module.exports = {
  decimalFormat: decimalFormat
};
