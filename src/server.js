const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');


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
var users = require('./players.json'); 

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
  users = require('./players.json'); 
  res.render("server", {allUsers: JSON.stringify(users)});
});

app.get("/admin", function(req, res) {
  users = require('./players.json'); 
  res.render("admin", {allUsers: JSON.stringify(users)});
});

app.post("/insert", function(req, res){
  console.log("INSERT POST CALLED");
  var table = users;
  var tmp = JSON.stringify(req.body);
  let re = /\\/g;
  tmp = tmp.replace(re, '');
  var str = '[' + tmp.slice(2, tmp.length-5) + ']';
  var objs = JSON.parse(str);
  table.push(objs[0]);
  let json = JSON.stringify(table);
    let le = /\\r/g;
  
    json = json.replace(le, '');

    fs.writeFileSync('players.json', json);
});

app.post("/update", function(req, res){
  console.log("UPDATE POST CALLED");
  var tmp = JSON.stringify(req.body);
  let re = /\\/g;
  tmp = tmp.replace(re, '');
  var str = '[' + tmp.slice(2, tmp.length-5) + ']';
  var objs = JSON.parse(str);
  var updated = objs[1];
  var data = users;
  for(let i = 0; i < data.length; ++i){
    if(data[i].PLAYER_NAME == objs[0].PLAYER_NAME && objs[0].SEASON == data[i].SEASON){
      data[i] = updated;
    }
  }

  let json = JSON.stringify(data);
  let change = /\\r/g;
  
  json = json.replace(change, '');

  fs.writeFileSync('players.json', json);
});

app.post("/delete", function(req, res) {
  console.log("DELETE POST CALLED");
  var tmp = JSON.stringify(req.body);
  var str = tmp.slice(4, tmp.length-7);
  var table = users;

  for(let i = 0; i < table.length; ++i) {
    if (str == table[i].PLAYER_NAME) {
        table.splice(i, 1)
        found = true;
    }
  }
  let json = JSON.stringify(table);
    let re = /\\r/g;
  
    json = json.replace(re, '');

    fs.writeFileSync('players.json', json);
  });
/*app.get("/example", function(req, res) {
  res.render("example");
});
*/

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});