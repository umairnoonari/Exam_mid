const User=require('../models/User')
const Register=(req,res)=>{
    res.render('register');
}
const Delete= async(req,res)=>{
    const {id}=req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/table');
}
const RegisterP=async(req,res)=>{
    const{Fullname,Phonenumber,State,Address,Email,Country,City,Zipcode}=req.body;
    console.log(req.body)
    const img=req.files.img
    const data=await User.create({Fullname,Phonenumber,State,Address,Email,Country,City,Zipcode,img:img.name},(err,prod)=>{
        console.log(prod);
    })
    img.mv(`./public/img`+img.name,(err)=>{
        if(err)
            console.log("err")
        else
            console.log('uploaded')
    })
    res.redirect('/table')
}
const table=async (req,res)=>{
    const data=await User.find();
    console.log(data)
    res.render('table.ejs',{data:data})
}
module.exports={Register,RegisterP,table,Delete}