const nodemailer = require('nodemailer');

function fireMail(message, email)
{
    let transporter = nodemailer.createTransport({
    service: 'smtp',
    auth: {
        user: 'system@swvl.com',
        pass: 'yourpassword'
    }
    });

    let mailOptions = {
    from: 'info@swvl.com',
    to: email,
    subject: 'SWVL',
    text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}
module.exports.fireMail= fireMail