const express =require('express');
const mongoose=require('mongoose')
const app = express();
const mid=require('./middleware/mid')
const bodyparser=require('body-parser');
const file=require('express-fileupload');
mongoose.connect("mongodb://127.0.0.1:27017/ead2")
app.use(bodyparser.json())
app.use(file())
app.use(bodyparser.urlencoded({extended:true}))
const Controller=require('./controller/UserCon')
app.use(express.static('public'))
app.set("view engine",'ejs')
app.get('/',Controller.Register);
app.get('/table',Controller.table)
app.post('/save',Controller.RegisterP)
app.listen(3000,function(){
    console.log("Server is listening at 3000");
})