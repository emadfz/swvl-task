const Notification = require('./NotificationsModel');
var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

class notificationsController {

  static send(Request, Response) {
    var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
  DelaySeconds: 1,
  MessageBody: JSON.stringify(Request.body),
  QueueUrl: "https://sqs.us-east-2.amazonaws.com/655889427334/swvl"
};

sqs.sendMessage(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.MessageId);
  }
});

    var notify = new Notification(Request.body);
    notify.save(function (err) {
      if (err) return console.error(err);
      console.log(" saved ");
      Response.send('sent').status(200);
    });
  }     



}
module.exports = notificationsController;