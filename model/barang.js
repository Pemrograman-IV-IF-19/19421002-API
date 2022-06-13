const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const userModel = mongoose.Schema({
    namaBarang: {
        type: String
    },
    harga: {
        type: Number
    },
    restok: {
        type: Number
    },
    idKategori: {
        types: ObjectId
    }
})

module.exports = mongoose.model('barang', userModel)
