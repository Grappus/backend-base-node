/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains string format related methods
*/
// convert input string into title case
let titleCase = function(str) {
  return str.toLowerCase().trim().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
};


module.exports = {
  titleCase: titleCase
};
