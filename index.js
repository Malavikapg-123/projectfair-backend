// express server creation

// import router.js
const router=require('./Routes/router')
const jwtMiddleware=require('./Middlewares/jwtMiddleware')

// 1) import dotenv   [from dotenv module, only we need config() file]
require('dotenv').config()

// 2) import express
const express = require('express')

// import connections
require('./DB/connections')

// 3) import cors
const cors = require('cors')

// 4) create server
const pfServer = express();

// 5) apply cors to the created server
pfServer.use(cors())

// 6) use a middle ware called express.json() to convert json data to javascript object
pfServer.use(express.json())
// pfServer.use(jwtMiddleware)
pfServer.use(router)

// export upload folder
// 1) first argument is the path that need to be used in front-end
// 2) second argument is the path of upload folder in server
pfServer.use('/uploads',express.static('./uploads'))

// 7) define port number
const PORT = 4000 || process.env.PORT

// 8) run the server
pfServer.listen(PORT,()=>{
    console.log(`Server is UP and Running in PORT ${PORT}`);
})

// 9) create a method for get 
pfServer.get('/',(req,res)=>{
    res.send("project is running on port 4000")
})

