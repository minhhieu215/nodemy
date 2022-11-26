const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db')
const bodyParser = require('body-parser')
// Router
const accountRouter = require('./routers/account')
// Import models 
const AccountModel = require('./models/account')
// connect mongoDB
db.connect()
// Middleware
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())


app.use('/api/account',accountRouter)

app.listen(process.env.PORT,()=>{ 
    console.log("App is running on port"+" "+PORT)
}) 