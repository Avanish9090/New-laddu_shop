import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ContactSchema = new Schema({
    name:String,
    number:Number,
    email:String,
    message:String
})

export const ContactModel = mongoose.model('contact',ContactSchema);