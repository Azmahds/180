const express = require("express");
const app = express();
const path = require("path");


// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });


const fs = require("fs")
let csv = fs.readFileSync("./public/data/players.csv")

function csvTOJson(){
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
  let re = /\\r/g;
  
  json = json.replace(re, '');

  fs.writeFileSync('players.json', json);
}
csvTOJson();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
  var users = require('./players.json'); 
  res.render("server", {allUsers: JSON.stringify(users)});
});

app.get("/players", function (req, res) {
  var user = require('./players.json'); 
  res.render("server", {allUsers: JSON.stringify(user)});
});

app.get("/games", function (req, res) {
  var games = require('./games.json');
  res.render("server_games", {allUsers: JSON.stringify(teams)});
});

app.get("/admin", function(req, res) {
  var user = require('./players.json'); 
  res.render("players", {allUsers: JSON.stringify(user)});
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});