const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    mailid:{type:String,required:true},
    phno:{type:String,required:true},
    dob:{type:String},
    password:{type:String,required:true}    
},{ 
    strict: false 
},{ 
    timestamps:true,
});
module.exports=mongoose.model('user',userSchema);