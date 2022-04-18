const express = require("express");
const app = express();


const fs = require("fs");
csv = fs.readFileSync("teams.csv")

async function csvTOJson(){
  
  var array = csv.toString().split("\n");

  
  let result = [];

 
  let headers = array[0].split(",")


 
  for (let i = 1; i < array.length - 1; i++) {
  let obj = {}

  
  let str = array[i]
  let s = ''

  
  let flag = 0
  for (let ch of str) {
      if (ch === '"' && flag === 0) {
      flag = 1
      }
      else if (ch === '"' && flag == 1) flag = 0
      if (ch === ',' && flag === 0) ch = '|'
      if (ch !== '"') s += ch
    }

    
    let properties = s.split("|")

  
    for (let j in headers) {
      obj[headers[j]] = properties[j]
    }

   
    result.push(obj)

  }

 
  let json = JSON.stringify(result);
  fs.writeFileSync('output.json', json);

}

csvTOJson();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});