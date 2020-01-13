const mailSender = require('./mailSender')
function processMessage(message){
    jsonMessage = JSON.parse(message);
    switch(jsonMessage.type) {
        case "notification":
            console.log("notification")
          break;
        case "email":
            const users = jsonMessage.users; 
            users.forEach(user => { 
                mailSender.fireMail(jsonMessage.message, user.email)
            }); 
          break;
        case "sms":
            console.log("sms")
        break;
        default:
         console.log("something went wrong with the message type")
      }
}

module.exports.processMessage = processMessage