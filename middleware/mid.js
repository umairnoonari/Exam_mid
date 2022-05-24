const mid=(req,res,next)=>{
    const {Fullname,Phonenumber,State,Address,Email,Country,City,Zipcode}=req.body
    const img=req.files.img;
    if(!Fullname&&!Phonenumber&&!State&&!Address&&!Email&&!Country&&!City&&!Zipcode&&!img.name)
    {
        res.redirect('/')
    }
    next()
}
module.exports=mid