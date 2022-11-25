const mongoose = require('mongoose')
const {httpError} = require('../helpers/handleError')
const usersModel = require('../models/packages')


const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}

const getItem = (req,res) =>{
    const { id } = req.params
    usersModel.findOne({_id: parseId(id)},
    (err,docs) =>{
        res.send({
            items: docs
        })
    })
}
const getItemByPackage = (req,res) =>{
    const { name } = req.params
    usersModel.findOne({name: name})
    res.send({
            items: docs
        })    
}
const getItemByPrice = (req,res) =>{
    const { price } = req.params
    usersModel.findOne({price: price})
    res.send({
            items: docs
        })    
}

const getItems =  async (req,res) =>{
    try{        
        const listAll = await usersModel.find()
        res.send({data: listAll})
    }catch(e)
    {
        httpError(res,e)
    }
}

const createItem = async (req,res) =>{
    try{
        var {packageName,price,status} = req.body
        packageName=packageName.toLowerCase()
        status = status.toLowerCase()
        const resDetail = await usersModel.create({packageName,price,status})
        res.send({message: 'Ok'})
    }catch(e)
    {
        httpError(res,e)
    }
}

const updateItem = (req,res) =>{
    const { id } = req.params
    const body = req.body
    usersModel.updateOne(
        {_id: parseId(id)},
        body,
        (err,docs) =>{
            res.send({
                message: 'Ok'
            })
        })
}

const deleteItem = async (req,res) =>{
    const { id } = req.params
    usersModel.deleteOne(
        {_id: parseId(id)},
        (err,docs) =>{
            res.send({
                message: 'Ok'
            })
        })
}

module.exports = {
    getItem,
    getItems,
    createItem,
    updateItem,
    deleteItem,
    getItemByPackage,
    getItemByPrice
}