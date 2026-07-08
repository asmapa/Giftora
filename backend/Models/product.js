const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },

    name:{
        type:String,
        required:true
    },

    trending:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    description:{
        type:String
    },

    price:{
        type:Number,
        required:true
    },

    stock:{
        type:Number,
        default:0
    },

    images:[
        {
            type:String
        }
    ],

    createdAt:{
        type:Date,
        default:Date.now
    }

});
module.exports = mongoose.model("Product",productSchema);