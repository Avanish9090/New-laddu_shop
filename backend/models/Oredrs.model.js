import mongoose from "mongoose";
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:Number,
        require:true
    },
    quantity:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    itemname:{
        type:String,
        require:true
    }
})

export const OrderModel = mongoose.model('Order',OrderSchema);