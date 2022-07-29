const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    },
    date : {
        type : String,
        default: true
    },

})

const User = mongoose.model('Users', UserSchema);
module.exports = User;