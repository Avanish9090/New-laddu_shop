import express from 'express';
import multer from "multer";
import mongoose from 'mongoose';
import 'dotenv/config'
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import {ItemModel} from './models/uploadItem.model.js'
import cors from 'cors'
import { OrderModel } from './models/Oredrs.model.js';
import { ReviewModel } from './models/Review.model.js';
import { ContactModel } from './models/Contacts.model.js';



const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected!'));

//cloudinary keys
cloudinary.config({
    cloud_name:"dukqkbwhz",
    api_key:"496747327975573",
    api_secret:"Bzoakk22tlLj7T-mkpsGi_CSG6g",
});

//cloudianary storage save using multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Laddu-saddu',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => file.name + '-' + Date.now()
  },
});

const upload = multer({ storage , limits: {fileSize:5*1024*1024}});


//upload image in cloud space
app.post("/upload",upload.single("file"),(req,res)=>{
  const {title,about,price} = req.body;
  const {originalname:name,path} = req.file;

   let item = new ItemModel({
    name:name,
    path:path,
    title:title,
    about:about,
    price:price
   })
   
   item.save().then(()=>
  {
    res.send('file Uploaded')
  }).catch((err)=>{
    console.log(err);
  })
    
})

//Get all uploaded item by admin
app.get('/items', async (req,res) =>{
    let items = await ItemModel.find();
    try{
         res.send(
      {
        status:1,
        msg:"All items",
        items
      }
    )
    } catch(err){
      console.log(err);
    }
})

//Order by user
app.post('/order' ,async (req,res) => {
  const {name,number,quantity,address,itemname} = req.body;

  let orderData = new OrderModel({
    name:name,
    number:number,
    quantity:quantity,
    address:address,
    itemname:itemname

  })

  try{
     await orderData.save();
    res.send({
      status:1,
      msg:"Order Saved"
    })
  }  catch(err){
      console.log(err)
    }

})

//order to show on page
app.get('/orders',async (req,res) => {
  let AllOrders = await OrderModel.find();
  try{
    res.send({
      status:1,
      msg:"All Orders",
      AllOrders
    })
  } catch(err){
    console.log(err);
  }
})

//delete item by admin
app.delete('/delete/:id',async (req,res) => {
  let delId = req.params.id;
 await ItemModel.deleteOne({_id:delId})
 .then(()=>{
  res.send(
    {
      status:1,
      msg:"successfull"
    }
  )
 }).catch((err)=>{
     console.log(err);
 }) 
})

//delete orders by admin
app.delete("/order/delete/:id",async (req,res) => {
  let delId = req.params.id;
  await OrderModel.deleteOne({_id:delId})
  .then(()=>{
    res.send(
      {
        status:1,
        msg:"deleted sucessfully"
      }
    )
  }).catch((err)=>{
    console.log(err);
  })
})

//store reviews
app.post('/review', (req,res) => {
  const {name , says} = req.body;
  let Reviewdata = new ReviewModel({
    name:name,
    says:says
  })

  try{
     Reviewdata.save();
     res.send(
      {
        status:1,
        msg:"saved successfully"
      }
     )
  } catch(err){
       console.log(err)
  }

})

//show review
app.get('/all-reviews',async (req,res) => {
  let allReviews = await ReviewModel.find();
  try{
      res.send({
        status:1,
        allReviews
      })
  } catch(err){
      console.log(err)
  }
})

//delete review 
app.delete("/delete-review/:id",async (req,res)=>{
  let dltId = req.params.id;
  await ReviewModel.deleteOne({_id:dltId})
  .then(()=>{
    res.send(
      {
        status:1,
        msg:"deleted"
      }
    )
  }).catch((err)=>{
    console.log(err);
  })
})

//Contacts
app.post('/contacts' , (req,res) => {
  let {name,number,email,message} = req.body;
  let ConcData = new ContactModel({
    name:name,
    number:number,
    email:email,
    message:message
  })

  try {
     ConcData.save();
     res.send(
      {
        status:1,
        msg:"Data saved sucessfully"
      }
     )
  } catch(err){
    console.log(err)
  }
})

//all contact data
app.get('/all-contacts',async (req,res) => {
  try{
  let allCdata = await ContactModel.find();
    res.send({
      allCdata
    })
  }
  catch(err) {
     console.log(err)
  }
  
})

//delete contact
app.delete('/delete-contacts/:id',async (req,res) => {
  let delId = req.params.id;
   try {
     await ContactModel.deleteOne({_id:delId});
     res.send({
      status:1,
      msg:"deleted successfully"
     })
   } catch(err) {
       console.log(err)
   }
})

//home page
app.get('/',(req,res) => {
    res.send(
        {
            status:1,
            msg:"hello world"

        }
    )
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on port"+process.env.PORT);
})