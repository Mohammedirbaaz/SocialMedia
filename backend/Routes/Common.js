const router=require('express').Router();
const User = require('../Models/user.model');
const jwt=require('jsonwebtoken');

router.route("/register").post((req,res)=>{
    var name=req.body.name;
    var mailid=req.body.mailid;
    var phno=req.body.phno;
    var dob=req.body.dob;
    var password=req.body.password;
    
    new User({name,mailid,phno,dob,password}).save().then(ress=>{res.send("Successfully Registered!")}).catch(err=>{console.log(err); res.send(err)})
});


router.route("/login").post(async(req,res)=>{
    console.log("login")
    var username=req.body.username;
    var password=req.body.password;
    const result= await User.findOne({mailid:username,password:password});
    if(result)
    {
        console.log(result);
        var ids2=result._id;
        const tokenf=jwt.sign({id:ids2},process.env.SECRET_KEY);
        console.log(JSON.stringify(ids2));
        res.cookie("token",tokenf,{
            httpOnly:true,
            sameSite:'none',
            secure:true
        }).send("Successfully loggedin");
    }
    else res.send(false);
});


module.exports=router;