/**
 * @Author: nikhilgurnani
 * @Date:   2018-04-20T10:24:25+05:30
 * @Last modified by:   nikhilgurnani
 * @Last modified time: 2018-05-29T00:08:14+05:30
 */



const utilEmail = require('./utilEmail');
const utilSMS = require('./utilSMS');
const uuid4 = require('uuid4');

var admin = require('firebase-admin');
// @NOTE: Uncomment this when you start using this in some projects.
// var serviceAccount = require('../../wow-connect-90fb4-firebase-adminsdk-np4at-b47dca505b.json')
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://s2mv2-76810.firebaseio.com"
// });


let sendNotification = function(userId=null, deviceToken=null,
                                deviceType=null, notifType=null,
                                title, body,
                                data=null, userInfo=null, uuid=null, action){

    var registrationToken = deviceToken;

    var message = {}

    message.notification = {
      "body": body,
      "title": title
    }

     if (deviceType == 'ios'){
       message.apns = {
         payload: {
           aps: {
             sound: "default"
           }
         }
       }
     }
     else if (deviceType == 'android'){
       message.android = {
         "notification": {
           "sound": "default",
           "icon": "ic_stat_notification",
           "color": "#09D8E7"
         }
       }
     }

    message.token = registrationToken;

    // Send a message to the device corresponding to the provided
    // registration token.

    if (notifType == 'push'){
        if (action == 'notification-panel'){
          message.notification = {}
          sub_obj = {
              "body": body,
              "title": title,
              "color":"#00ACD4",
              "priority":"high",
              "icon":"ic_notif",
              "group": "GROUP",
              "id": "id",
              "show_in_foreground": "true",
              "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ttlscY0HLW9pdAvVqnjvw6FqeTZqT8xZO5IiSSX-0IIYGskECQ"
          }
          message.data = {
              "type":"MEASURE_CHANGE",
              "custom_notification": JSON.stringify(sub_obj)
          }
        } else{
          message.data = {
            "payload": JSON.stringify(data),
            "notification_type": "QUERY.NEW_MESSAGE"
          }
        }
      admin.messaging().send(message)
        .then((response) => {
          console.log("************************");
          return true;
        })
        .catch((error) => {
          console.log(error.errorInfo);
          return false;
        });
      }
    else if (notifType == 'sms'){
      utilSMS.sendSMS(userInfo, message.notification.body, (error, result) => {
        if (error){
          console.log(error);
          return false;
        }
        else{
          return true;
        }
      });
    }
    else if (notifType == 'email'){
      utilEmail.sendEmail(userInfo, message.notification.title, message.notification.body, (error, result, res) => {
        if (error){
          console.log(error)
          return false;
        }
        else{
          console.log(result)
          return true;
        }
      });
    }
};

module.exports = {
  sendNotification,
};
