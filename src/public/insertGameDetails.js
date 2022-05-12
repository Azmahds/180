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

    var nName = document.getElementById("insert_name").value
    var nTID = document.getElementById("insert_teamID").value
    var nPID = document.getElementById("insert_playerID").value
    var nSeason = document.getElementById("insert_season").value
    
    if(nName == "" || nTID == "" || nPID == "" || nSeason == ""){
        alert("Have not inserted all characteristics!")
        return;
    }
    //append it to the end of the array by season
    var insertedGame = {
        PLAYER_NAME: nName,
        TEAM_ID: nTID,
        PLAYER_ID: nPID,
        SEASON: nSeason,
    }
    data.push(insertedPlayer);
    document.getElementById("data").innerText = JSON.stringify(data);

    newPlayer = JSON.stringify(insertedPlayer)
    igd.send(newPlayer);
    return;
}