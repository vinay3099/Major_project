const mongoose = require('mongoose');


var customerschema= new mongoose.Schema({
   name:{
     type:String,
     required:true
   },
   vehiclename:{
       type:String,
       required:true,
   },
   vehiclenumber:{
    type:String,
    required:true,
    unique:true
   },
   entrydate:{
    type:String,
    required:true
   },
   exitdate:{
    type:String,
    required:true
   },
   
})

 const Customerdb = mongoose.model('customerdb',customerschema);

 module.exports = Customerdb;



