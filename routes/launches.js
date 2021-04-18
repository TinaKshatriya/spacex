const express = require("express");
const router =express.Router();

const Launches=require('../model/Launches');



  // router.get("/", async(req,res)=>{
  //     console.log("/launches the data");
  //     const api_url = `https://api.spacexdata.com/v4/launches/past?limit=10` ;
  //     const options = {
  //       "method":"GET",
  //     };
    
  //    const response = await fetch(api_url,options)
  //    .then(res=>res.json())
  //    .catch(e=>{
  //      console.error({
  //        "message":"oh no",
  //        error:e,
  //      });
  //    });
  //    console.log(response.api_url);
  //    res.send(response.api_url);
  //   });

    
    
  // router.post("/",async(req,res)=>{

       
  //   })

  module.exports=router;