const mongoose = require('mongoose')
const {httpError} = require('../helpers/handleError')
const usersModel = require('../models/users')


const parseId = (id) =>{
    return mongoose.Types.ObjectId(id)
}

const parseLowCase = (upperString) =>{
    return upperString.toLowerCase()
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
const getItemByName = (req,res) =>{
    const { name, lastname } = req.params
    usersModel.findOne({$and: [{name: name},{lastName: lastname}]})
    res.send({
            items: docs
        })    
}
const getItemByPhone = (req,res) =>{
    const { name, lastname } = req.params
    usersModel.findOne({$and: [{name: name},{lastName: lastname}]})
    res.send({
            items: docs
        })    
}

const getItemBySuscriber = (req,res) =>{
    const { usernumber } = req.params
    usersModel.findOne({userNumber: usernumber},
    (err,docs) =>{
        res.send({
            items: docs
        })
    })
}
const getItemByAddress =  async (req,res) =>{
    const { street, housenumber } = req.params
    const respuesta = await usersModel.find({ $and: [{street: street }, {houseNumber: housenumber }]})
    res.send({
        items: respuesta
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
        var {userNumber,name,lastName,bornDate,gender,street,houseNumber,streetReference,block,zipCode,town,city,state,coutry,phone,promoDate,normalDate,status} = req.body
        name=name.toLowerCase()
        lastName = lastName.toLowerCase()
        gender = gender.toLowerCase()
        street = street.toLowerCase()
        streetReference  = streetReference.toLowerCase()
        block = block.toLowerCase()
        town = town.toLowerCase()
        city = city.toLowerCase()
        state = state.toLowerCase()
        coutry = coutry.toLowerCase()
        status=status.toLowerCase()
        const resDetail = await usersModel.create({userNumber,name,lastName,bornDate,gender,street,houseNumber,streetReference,block,zipCode,town,city,state,coutry,phone,promoDate,normalDate,status})
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
    getItemByName,
    getItemBySuscriber,
    getItemByAddress,
    getItemByPhone
}



