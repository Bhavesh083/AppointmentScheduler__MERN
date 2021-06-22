const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appointSchema = new Schema({
    name : {type : String , required : true },
    email : {type : String , required : true },
    date : {type : String , required : true },
    time : {type : String , required : true }
},
    { timestamps : true }
); 

const Appoint = mongoose.model('Appoint',appointSchema);

module.exports = Appoint;


 