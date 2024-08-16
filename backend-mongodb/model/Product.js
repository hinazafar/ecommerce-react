const mongoose = require('mongoose');
const { Schema } = mongoose;
//name, price, quantity, description, pictureName
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true, 
    },
    price:{
        type: Number,
        default: "General"
    },
    quantity:{
        type: Number,
    },
    picture:{
        type:String,
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('Products', ProductSchema);