const res = require('express/lib/response')
const controllerBarang = require('../controller/barangController')
const router = require('express').Router()

router.post('/inputBarang' , (req, res) => {
    controllerBarang.inputBarang(req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})
router.get('/get-data' , (req, res) => {
    controllerBarang.getAllBarang()
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/get-data-ById/:id' , (req, res) => {
    controllerBarang.getBarangById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.put('/update-barang/:id' , (req, res) => {
    controllerBarang.updateBarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch(err => {
        res.json(err)
    })
})

router.delete('/delete-barang/:id' , (req, res) => {
    controllerBarang.DeleteBarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch( err => {
        res.json(err)
    })
})


module.exports = router
