var igd = new XMLHttpRequest();

igd.open("POST", '/insertGameDetails', true);
igd.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("Content-Type", "application/json");

window.addEventListener("load", (e) => {
    var update = document.getElementById("igd_submit");
    update.addEventListener("click", () => insertData())
})



function insertGameData() {
    var data = JSON.parse(document.getElementById("data").innerText);

    //var nGameD = document.getElementById("insert_name").value
    //var nGID = document.getElementById("insert_teamID").value
    //var nHTW = document.getElementById("insert_playerID").value
    var nGameD = document.getElementById("insert_GAME_DATA_EST").value
    var nGID = document.getElementById("insert_GAME_ID").value
    var nGT = document.getElementById("insert_GAME_STATUS_TEXT").value
    var nSeason = document.getElementById("insert_SEASON").value
    var nHome = document.getElementById("insert_TEAM_ID_home").value
    var nPTH = document.getElementById("insert_PTS_home").value
    var nPFGH = document.getElementById("insert_FG_PCT_home").value
    var nFG3H = document.getElementById("insert_FG3_PCT_home").value
    var nAH = document.getElementById("insert_AST_home").value
    var nRH = document.getElementById("insert_REB_home").value
    var nAway = document.getElementById("insert_TEAM_ID_away").value
    var nPTA = document.getElementById("insert_PTS_away").value
    var nFGTA = document.getElementById("insert_FG_PCT_away").value
    var nPFTA = document.getElementById("insert_FT_PCT_away").value
    var nFG3A = document.getElementById("insert_FG3_PCT_away").value
    var nAA = document.getElementById("insert_AST_away").value
    var nRA = document.getElementById("insert_REB_away").value
    var nHID = document.getElementById("insert_HOME_TEAM_ID").value
    var nVID = document.getElementById("insert_VISITOR_TEAM_ID").value
    var nHTW = document.getElementById("insert_HOME_TEAM_WINS").value


    if(nHID == "" || nVID == "" || nHTW == ""){
        alert("Have not inserted all characteristics!")
        return;
    }
    if(nHTW == 0 || nHTW == 1){
        alert("Home Team Wins must be Zero or One!")
        return;
    }
    //append it to the end of the array by season
    var insertedGame = {
        GAME_DATE_EST: nGameD,
        GAME_ID: nGID,
        GAME_STATUS_TEXT: nGT,
        HOME_TEAM_ID: nHID,
        VISITOR_TEAM_ID: nVID,
        SEASON: nSeason,
        TEAM_ID_home: nHome,
        PTS_home: nPTH,
        FG_PCT_home: nPFGH,
        FT_PCT_home: nPFTH,
        FG3_PCT_home: nFG3H,
        AST_home: nAH,
        REB_home: nRH,
        TEAM_ID_away: nAway,
        PTS_away: nPTA,
        FG_PCT_away: nFGTA,
        FT_PCT_away: nPFTA,
        FG3_PCT_away: nFG3A,
        AST_away: nAA,
        REB_away: nRA,
        HOME_TEAM_WINS: nHTW,


    }
    data.push(insertedGame);
    document.getElementById("data").innerText = JSON.stringify(data);

    newPlayer = JSON.stringify(insertedPlayer)
    igd.send(newPlayer);
    return;
}