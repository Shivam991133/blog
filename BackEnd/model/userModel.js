const mongoose = require('mongoose');
const user = new mongoose.Schema({
    userName: {
        type: String,
        requierd: [true, ' Please Enter a User Name']
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

const UserModel = mongoose.model('Users', user)
module.exports = UserModel;