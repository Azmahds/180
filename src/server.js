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


let csv2 = fs.readFileSync("./public/data/games.csv")
function csvTOJsonForGames(){
  var array = csv2.toString().split("\n");
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

  fs.writeFileSync('games.json', json);
}

csvTOJsonForGames();
var users_games = require('./games.json'); 
//-------------------------------------------------

let csv3 = fs.readFileSync("./public/data/teams.csv")
function csvTOJsonForTeams(){
  var array = csv3.toString().split("\n");
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

  fs.writeFileSync('teams.json', json);
}

csvTOJsonForTeams();
var users_teams = require('./teams.json'); 

//-------------------------------------------------------------

function MET(){
  const map1 = new Map();
  
  for(let i = 0; i < users_games.length; i++){
    var points_home = parseFloat(users_games[i].PTS_home);
    var rebounds_home = parseFloat(users_games[i].REB_home);
    var assists_home = parseFloat(users_games[i].AST_home);

    var points_away = parseFloat(users_games[i].PTS_away);
    var rebounds_away = parseFloat(users_games[i].REB_away);
    var assists_away = parseFloat(users_games[i].AST_away);

    if (isNaN(points_home)) points_home = 0;
    if (isNaN(rebounds_home)) rebounds_home = 0;
    if (isNaN(assists_home)) assists_home = 0;

    if (isNaN(points_away)) points_away = 0;
    if (isNaN(rebounds_away)) rebounds_away = 0;
    if (isNaN(assists_away)) assists_away = 0;

    if(map1.has(users_games[i].HOME_TEAM_ID)){
      map1.set(users_games[i].HOME_TEAM_ID, parseFloat(map1.get(users_games[i].HOME_TEAM_ID))+points_home+rebounds_home+assists_home);
      //console.log("This is the team with the best eff: " + map1.get('1610612748'));
    }
    else{
      map1.set(users_games[i].HOME_TEAM_ID, points_home+rebounds_home+assists_home);
    }

    if(map1.has(users_games[i].TEAM_ID_away)){
      map1.set(users_games[i].TEAM_ID_away, parseFloat(map1.get(users_games[i].TEAM_ID_away))+points_away+rebounds_away+assists_away);
     // console.log("This is the team with the best eff: " + map1.get('1610612748'));
    }
    else{
      map1.set(users_games[i].TEAM_ID_away, points_away+rebounds_away+assists_away);
    }

    
  }

  //console.log([...map1.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0])
  var homeID = [...map1.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0] ;
  var awayID = homeID;
  var teamName = "no name";

  if(homeID == 1610612738 || awayID == 1610612738) {
      teamName = "BOS";
  }
  else if(homeID == 1610612748 || awayID == 1610612748) {
      teamName = "MIA";
  }
  else if(homeID == 1610612740 || awayID == 1610612740) {
      teamName = "NOP";
  }
  else if(homeID == 1610612745 || awayID == 1610612745) {
      teamName = "HOU";
  }
  else if(homeID == 1610612737 || awayID == 1610612737) {
      teamName = "ATL";
  }
  else if(homeID == 1610612751 || awayID == 1610612751) {
      teamName = "BKN";
  }
  else if(homeID == 1610612765 || awayID == 1610612765) {
      teamName = "DET";
  }
  else if(homeID == 1610612744 || awayID == 1610612744) {
      teamName = "GSW";
  }
  else if(homeID == 1610612747 || awayID == 1610612747) {
      teamName = "LAL";
  }
  else if(homeID == 1610612750 || awayID == 1610612750) {
      teamName = "MIN";
  }
  else if(homeID == 1610612753 || awayID == 1610612753) {
      teamName = "ORL";
  }
  else if(homeID == 1610612755 || awayID == 1610612755) {
      teamName = "PHI";
  }
  else if(homeID == 1610612762 || awayID == 1610612762) {
      teamName = "UTA";
  }
  else if(homeID == 1610612746 || awayID == 1610612746) {
      teamName = "LAC";
  }
  else if(homeID == 1610612741 || awayID == 1610612741) {
      teamName = "CHI";
  }
  else if(homeID == 1610612743 || awayID == 1610612743) {
      teamName = "DEN";
  }
  else if(homeID == 1610612756 || awayID == 1610612756) {
      teamName = "PHX";
  }
  else if(homeID == 1610612757 || awayID == 1610612757) {
      teamName = "POR";
  }
  else if(homeID == 1610612758 || awayID == 1610612758) {
      teamName = "SAC";
  }

  return teamName;
}


MET();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
  users = require('./players.json'); 
  res.render("server_players", {allUsers: JSON.stringify(users)});
});

app.get("/admin/players", function(req, res) {
  users = require('./players.json'); 
  res.render("players", {allUsers: JSON.stringify(users)});
});

app.post("/insertPlayer", function(req, res){
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
    console.log(json[5000])
    fs.writeFileSync('players.json', json);
});

app.post("/updatePlayer", function(req, res){
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

app.post("/deletePlayer", function(req, res) {
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