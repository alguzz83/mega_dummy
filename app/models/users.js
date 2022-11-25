const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const usersScheme = new mongoose.Schema({
    
    name: {
        type: String
    },
    userNumber: {
        type: Number
    },
    lastName: {
        type: String
    },
    bornDate: {
        type: Date
    },
    gender: {
        type: String
    },
    street: {
        type: String
    },
    houseNumber: {
        type: String
    },
    streetReference: {
        type: String
    },    
    block: {
        type: String
    },
    zipCode: {
        type: Number
    },
    town:{
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    coutry: {
        type: String
    },
    phone: {
        type: Number
    },
    promoDate: {
        type: Date
    },
    normalDate: {
        type: Date
    },
    status: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})
usersScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('users', usersScheme)