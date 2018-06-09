/**
 * @Author: nikhilgurnani
 * @Date:   2018-05-31T17:20:28+05:30
 * @Last modified by:   nikhilgurnani
 * @Last modified time: 2018-06-01T13:58:13+05:30
 */

let generateOTPCode = function() {
  return Math.floor(Math.random() * 9000) + 1000;
};

module.exports = {
  generateOTPCode
};
