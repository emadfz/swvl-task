const mongoose = require('mongoose');
const Schema = mongoose.Schema
    
let schema = new Schema({
    message : String ,
    type : String,
    users : [Object]
});

let Notification = mongoose.model('Notification', schema);
module.exports = Notification;
