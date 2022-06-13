const controlkategori = require('../controller/kategoricontroller')
const routes = require('express').Router()

routes.post('/input', (req, res) => {
    controlkategori.inputkategori(req.body)
        .then((result) =>{
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})

routes.get('/get-data', (req, res) => {
    controlkategori.getAllkatagori()
        .then((result) =>{
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})

routes.get('/get-data/:namakategori', (req, res) => {
    controlkategori.getAllkatagoriByName(req.params.namakategori)
        .then((result) =>{
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})

routes.put('/update-data/:id', (req, res) => {
    controlkategori.updatekategori(req.params.id, req.body)
        .then((result) =>{
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})

routes.delete('/hapus-data/:id', (req, res) => {
    controlkategori.hapuskategori(req.params.id)
        .then((result) =>{
            res.json(result)
        }).catch(err =>{
            res.json(err)
        })
})
module.exports = routes