const express = require('express')
const router = express.Router()
const {getItems,getItem,createItem,updateItem,deleteItem,getItemByName,getItemBySuscriber,getItemByAddress, getItemByPhone} = require('../controllers/users')

router.get('/',getItems)

router.get('/byname/:name/:lastname',getItemByName)

router.get('/bysuscriber/:usernumber',getItemBySuscriber)

router.get('/byaddress/:street/:housenumber',getItemByAddress)

router.get('/byphone/:phone',getItemByPhone)

router.get('/:id', getItem)

router.post('/',createItem)

router.put('/:id',updateItem)

router.delete('/:id', deleteItem)


module.exports = router