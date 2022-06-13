
const { reject } = require('bcrypt/promises')
const modelkategori = require('../model/kategori')
const monggoose = require('mongoose')
const ObjectId = monggoose.Types.ObjectId

exports.inputkategori = (data) =>
    new Promise(async(resolve, reject) => {
        await modelkategori.create(data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil Membuat Kategori'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
    })

    exports.getAllkatagori = () =>
        new Promise(async(resolve, reject) => {
            modelkategori.find({})
                .then(datakatagori => {
                    if (datakatagori.length > 0) {
                        resolve({
                            status: true,
                            msg: 'Berhasil Memuat Data',
                            data: datakatagori
                        })
                    }else{
                        reject({
                            status: false,
                            msg: 'Tidak Ada Data Katagori'

                        })
                    }
                }).catch(err => {
                    reject({
                        status: false,
                        msg: 'Terjadi Kesalahan Pada Server'
                    })
                })
        })

    
        exports.getAllkatagoriByName = () =>
        new Promise(async(resolve, reject) => {
            modelkategori.find({namakategori: name})
                .then(datakatagori => {
                    if (datakategori) {
                        resolve({
                            status: true,
                            msg: 'Berhasil Memuat Data',
                            data: datakatagori
                        })
                    }else{
                        reject({
                            status: false,
                            msg: 'Tidak Ada Data Katagori ' + name
                        })
                    }
                }).catch(err => {
                    reject({
                        status: false,
                        msg: 'Terjadi Kesalahan Pada Server'
                    })
                })
        })

exports.updatekategori = (id, data) => 
    new Promise(async (resolve, reject) => {
        modelkategori.updateOne({ _id: ObjectId(id) }, data)
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil Merubah Data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Terjadi Kesalahan Pada Server'
                })
            })
    })


exports.hapuskategori = (id) =>
    new Promise(async (resolve, reject) => {
        modelkategori.deleteOne({ _id: ObjectId(id) })
            .then(() => {
                resolve({
                    status: true,
                    msg: 'Berhasil Menghapus Data'
                })
            }).catch(err => {
                reject({
                    status: false,
                    msg: 'Server Tidakn Meresponse'
            })
        })
    })