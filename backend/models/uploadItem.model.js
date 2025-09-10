import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name:{
        type:String,
    },
    path:{
        type:String,
    },
    title:{
        type:String,   
    },
    price:{
        type:String
    },
    about:{
        type:String
    }
})


export const ItemModel = mongoose.model('Item', ItemSchema);
