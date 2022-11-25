const express = require('express')
const router = express.Router()
const {getItems,getItem,createItem,updateItem,deleteItem,getItemByPackage,getItemByPrice} = require('../controllers/packages')

router.get('/',getItems)

router.get('/bypackage/:name',getItemByPackage)

router.get('/byprice/:price',getItemByPrice)

router.get('/:id', getItem)

router.post('/',createItem)

router.put('/:id',updateItem)

router.delete('/:id', deleteItem)


module.exports = router