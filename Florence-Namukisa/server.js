const express = require('express')
const path = require('path')
const mongoose = require('mongoose')


const app = express();
const port = 4000;

require('dotenv').config();


const formRoutes = require('./Routes/formRoutes')

mongoose.connect(process.env.DATABASE_LOCAL, {
    
  });
  
  mongoose.connection
    .once("open", () => {
      console.log("Mongoose connection open");
    })
    .on("error", err => {
      console.error(`Connection error: ${err.message}`);
    });
  
  //set view engine to pug
  app.set("view engine", "pug");
  app.set("views", path.join(__dirname, "views"));
  
  
  
  //my middleware
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/', formRoutes)

app.listen(port, () => console.log(`listening on desire's port ${port}`));