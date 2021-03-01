// import mongoose
const mongoose = require('mongoose');

const Users = {
    firstName: String,
    lastName: String,
    mail_id: String,
    id:Number
}
  
const userModel = mongoose.model('userDetails', Users,'userDetails');
// export module
module.exports = {
    userModel
}