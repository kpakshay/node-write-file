const express=require("express");
const app=express();

const fs = require('fs')


app.get("/",(req,res)=>{
    res.send("welcome");
})
app.get("/write",(req,res)=>{
  let date_ob = new Date();
  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();

  let hours = date_ob.getHours();
  let minutes = date_ob.getMinutes();
  const content = 'Hello world'
  let k=year + "-" + month + "-" + date + " " + hours + "-" + minutes;
    res.send("Writing a file");
    // fs.writeFile('C:\Users\AKSHAY\Node\node-task-1/test.txt', content, { flag: 'a+' }, err => {})
    fs.writeFile(k, date_ob.toString(), err => {
        if (err) {
          console.error(err)
          return
        }
      })
      

})
app.listen(3000);