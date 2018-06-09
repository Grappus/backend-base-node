/*
@author: Ankur Jat (ankur@grappus.com)
@summary: Contains date format related methods
*/
let winston = require('./utilLogger');


// return current epoch time in IST
let now = function() {
  let date = new Date();
  return date.getTime() + 19800000;  // IST is ahead of UTC with 19800000 msec
};


// return date in ISO format i.e YYYY-MM-DD
let isoFormat = function(dateString) {
  try {
    if (!dateString) {
      return null;
    } else {
      let month = String(dateString.getMonth() + 1);
      if (month.length == 1) {
        month = '0' + month;
      }

      let date = String(dateString.getDate());
      if (date.length == 1) {
        date = '0' + date;
      }
      return dateString.getFullYear() + '-' + month + '-' + date;
    }
  } catch (error) {
    winston.log('error', {
      error:error,
      action:'utils-utilDate-isoFormat-catch',
      date:dateString
    });
    return dateString;
  }
};


// will convert epoch to date string
let epochToString = function(epochString) {
  if (!epochString) {
    return '';
  } else {
    epochString = Math.floor(epochString) + 19800000;
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    if (String(epochString).length == 13) {
      epochString = Math.floor(Number(epochString)/1000);
    }
    d.setUTCSeconds(epochString);
    return isoFormat(d);
  }
};


// will string to epoch
let stringToEpoch = function(dateString) {
  if (!dateString) {
    // 1st sep 2017
    return 1506796200000;
  } else {
    let splitData = dateString.split('-');
    let epoch = new Date(splitData[0], splitData[1], splitData[2]);
    return epoch.getTime();
  }
};


// will return epoch time
let epochFormat = function(dateString) {
  try {
    if (!dateString) {
      return null;
    } else {
      return dateString.getTime();
    }
  } catch (error) {
    winston.log('error', {
      error:error,
      action:'utils-utilDate-epochFormat-catch',
      date:dateString
    });
    return dateString;
  }
};


// convert epoch to date
let toDate = function(epochString) {
  try {
    if (!epochString) {
      return Date.now();
    }
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epochString);
    return d;
  } catch (error) {
    winston.log('error', {
      error:error,
      action:'utils-utilDate-toDate-catch',
      date:epochString
    });
    return epochString;
  }
};


module.exports = {
  epochFormat,
  epochToString,
  isoFormat,
  now,
  stringToEpoch,
  toDate
};
