const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require('body-parser');

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
  users = require('./players.json'); 
  res.render("server_players", {allUsers: JSON.stringify(users)});
});

app.get("/data", function (req, res) {
  users = require('./players.json'); 
  res.send(users);
});

app.get("/players", function (req, res) {
  var user = require('./players.json'); 
  res.render("server", {allUsers: JSON.stringify(user)});
});

app.get("/games", function (req, res) {
  var games = require('./games.json');
  var met = MET();
  res.render("server_games", {allUsers: JSON.stringify(games), bestTeam: met});
});

app.get("/consistent", function (req, res) { //most consistent team page
  var home = mostHomeWins();
  var away = mostAwayWins();
  var all = mostConsistent();
  res.render("consistent", {home: home, away: away, all: all});
});

app.get("/admin", function(req, res) {
  var user = require('./players.json'); 
  res.render("players", {allUsers: JSON.stringify(user)});
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

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

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
    }
    else{
      map1.set(users_games[i].HOME_TEAM_ID, points_home+rebounds_home+assists_home);
    }

    if(map1.has(users_games[i].TEAM_ID_away)){
      map1.set(users_games[i].TEAM_ID_away, parseFloat(map1.get(users_games[i].TEAM_ID_away))+points_away+rebounds_away+assists_away);
    }
    else{
      map1.set(users_games[i].TEAM_ID_away, points_away+rebounds_away+assists_away);
    }
  }
  var homeID = [...map1.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0] ;

  return homeID;
}

function mostConsistent(){
  var totalWins = mostHomeWins();
  var awayWins = mostAwayWins();

  totalWins.forEach(team => {
    var addAway = awayWins.find(el => el[0] == team[0]);
    team[1] += addAway[1];
  })

  totalWins.sort(function(a,b) {
    const n1 = a[1];
    const n2 = b[1];

    if(n1 < n2){return 1;}
    else if(n1 > n2){return -1;}
    else{return 0;}
  });
  return totalWins;
}

// mostConsistent();

function mostHomeWins(){
  const map1 = new Map();
  
  for(let i = 0; i < users_games.length; i++){
    var home_wins = parseFloat(users_games[i].HOME_TEAM_WINS);
    if (isNaN(home_wins)) home_wins = 0;

    if(map1.has(users_games[i].HOME_TEAM_ID)){
      map1.set(users_games[i].HOME_TEAM_ID, parseFloat(map1.get(users_games[i].HOME_TEAM_ID))+ home_wins);
    }
    else{
      map1.set(users_games[i].HOME_TEAM_ID, home_wins);
    }
  }

  var sortedArr = Array.from(map1);
  sortedArr.sort(function(a,b) {
    const n1 = a[1];
    const n2 = b[1];

    if(n1 < n2){return 1;}
    else if(n1 > n2){return -1;}
    else{return 0;}
  });

  return sortedArr;
}

// mostHomeWins();


function mostAwayWins(){
  const map1 = new Map();
  
  for(let i = 0; i < users_games.length; i++){
    var away_wins = parseFloat(users_games[i].HOME_TEAM_WINS);
    if(away_wins == 0){
      away_wins = 1;
    }
    else{
      away_wins = 0;
    }
    if (isNaN(away_wins)) away_wins = 0;

    if(map1.has(users_games[i].VISITOR_TEAM_ID)){
      map1.set(users_games[i].VISITOR_TEAM_ID, parseFloat(map1.get(users_games[i].VISITOR_TEAM_ID))+ away_wins);
    }
    else{
      map1.set(users_games[i].VISITOR_TEAM_ID, away_wins);
    }
  }
  var sortedArr = Array.from(map1);
  sortedArr.sort(function(a,b) {
    const n1 = a[1];
    const n2 = b[1];

    if(n1 < n2){return 1;}
    else if(n1 > n2){return -1;}
    else{return 0;}
  });
  return sortedArr;
}
