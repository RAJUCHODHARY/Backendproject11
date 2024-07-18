const express=require('express')
const mongoose=require('mongoose')
const cors =require('cors')
const MyModel =require('./model/Register')
const app =express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/login',(req,res)=>{
    const {email ,password}=req.body;
    MyModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("no record existed")
        }
    })
})
app.post('/register' ,(req, res)=>{
    const {name,email,password} = req.body;
    MyModel.findOne({email: email})
    .then(user =>{
        if(user){
            res.json("Already have an account ")
        }else{
            MyModel.create({name: name, email: email, password: password})
            .then(result =>res.json("Accout  created"))
            .catch(err => res.json(err))

        }
    })
    .catch(err => res.json(err))

})

app.listen(3001,()=>{
    console.log("server is Running")
})