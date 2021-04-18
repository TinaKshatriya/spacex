// Server

const express = require("express");
const router =express.Router();
const fetch = require('node-fetch');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
require('dotenv/config');
const fs = require('fs');




const app = express();
const port = 4000;
//import route

const launchesRoute=require('./routes/launches');
app.use(bodyParser.json());
app.use("/launches",launchesRoute);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/launches", (req, res) => {
  fs.readFile("./launches.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
  });
  });


// router.get("/launches", async(req,res)=>{
//   console.log("/launches the data");
//   const url = `https://api.spacexdata.com/v4/launches/past?limit=10`;
//   const options = {
//     "method":"GET",
//   };

//  const response = await fetch(url,options)
//  .then(res=>res.json())
//  .catch(e=>{
//    console.error({
//      "message":"oh no",
//      error:e,
//    });
//  });
//  console.log("RESPONSE:",response);
//  res.send(response.url);
// });
//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },()=> console.log('connected to db'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


