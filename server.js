if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  const mongoose = require('mongoose')
  const dotenv =require("dotenv")
  const indexRouter = require('./routes/index')
// const { MongoClient } = require('mongodb')
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  app.use(express.static('public'))
  dotenv.config()
  
//   mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
//   const db = mongoose.connection
//   db.on('error', error => console.error(error))
//   db.once('open', () => console.log('Connected to Mongoose'))

mongoose.connect(process.env.mongodb_url,{useNewUrlParser: true })
.then(()=>{
    console.log("mongodb connected sucessfully")
})
.catch((error)=>{
    console.log("error",error)

}) 

  app.use('/', indexRouter)
  app.listen(process.env.PORT || 3000)

