const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

let Appoints = require("../models/appsched");

router.route('/').get((req,res) => {
    Appoints.find()
           .then(appoint => res.json(appoint))
           .catch((error) => console.log("Error in fetching"));
});

router.route('/add').post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const time = req.body.time;
    const date = req.body.date;
  
    const newAppoint = new Appoints({
      name,
      email,
      date, 
      time
    });   

    newAppoint.save()
              .then(() => res.json("Added appointment"))
              .catch(error => console.log("Error in adding appointment"));
});
  
router.route('/:id').delete((req,res)=>{
      Appoints.findByIdAndDelete(req.params.id)
            .then(()=>res.json("Deleted!"))
            .catch((error)=> console.log("Error deleting appointment"));
});
 
module.exports = router ;