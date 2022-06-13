const monggoose = require('mongoose')
const ObjectId = monggoose.Types.ObjectId
const userModel = monggoose.Schema({
    namakategori: {
        type: String
    },
    keterangan: {
        type: String
    },
    idkategori: {
        type : ObjectId
    }
})

module.exports = monggoose.model('kategori', userModel)