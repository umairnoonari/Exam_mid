const express =require('express');
const app = express();
const Controller=require('./controller/UserCon')
app.get('/',Controller.Register);
app.set("view engine",'ejs')
app.listen(3000,function(){
    console.log("Server is listening at 3000");
})