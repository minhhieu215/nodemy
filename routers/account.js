const express = require('express')
const router = express.Router();
router.post('/register',(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password
    console.log(username)
    console.log(password)
    AccountModel.findOne({username:username})
    .then(data=>{
        if(data){
            res.json("Tai khoan da ton tai")
        }else  {
            return AccountModel.create({
                username,
                password
            })
            .then(data=>{
                res.json('Tao tai khoan thanh cong')
            })
        }
    })

    .catch(error=>{
        res.status(500).json('Tao tai khoan that bai')
    })
})

router.post('/login',(req,res,next)=>{
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({username:username,password:password})
    .then(data=>{
        if(data){
            res.json("Dang nhap thanh cong")
        }else { 
            res.json("Dang nhap that bai")
        }
    })
    .catch(err=> res.json('Co loi ben server'))
})


module.exports = router