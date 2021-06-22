const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();  
const port = process.env.PORT || 5000;
 
app.use(cors()); 
app.use(express.json());
 
mongoose.connect("mongodb+srv://*****:******@cluster0.x2gaq.mongodb.net/appscheduler?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true }).then(()=> console.log(" Successfully running on 5000")).catch(error => console.log("Failed to connect",error));

const appointRouter = require('./routes/appschedroute'); 
//const usersRouter = require('./routes/users'); 
 
app.use('/appoint', appointRouter); 
//app.use('/users', usersRouter); 

app.listen(port, () => {
    console.log();
});
