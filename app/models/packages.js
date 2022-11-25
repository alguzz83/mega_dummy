const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const packageScheme = new mongoose.Schema({
    
    packageName: {
        type: String
    },
    price: {
        type: Number
    },
    status: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
})
packageScheme.plugin(mongoosePaginate)

module.exports = mongoose.model('package', packageScheme)