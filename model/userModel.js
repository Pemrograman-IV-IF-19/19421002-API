const monggoose = require('mongoose')

const userModel = monggoose.Schema({
    namaLengkap: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    }
})

module.exports = monggoose.model('users', userModel)