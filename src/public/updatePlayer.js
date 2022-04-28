var xhru = new XMLHttpRequest();

xhru.open("POST", '/updatePlayer', true);
xhru.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("Content-Type", "application/json");

window.addEventListener("load", (e) => {
    var update = document.getElementById("update_submit");
    update.addEventListener("click", () => updateData())
})



function updateData() {
    var data = JSON.parse(document.getElementById("data").innerText);
    var updatePlayer = document.getElementById("update_player").value;
    var updateSeason = document.getElementById("update_season").value
    if(updatePlayer == "" || updateSeason == ""){
        alert("NEED TO ADD PLAYER NAME TO UPDATE\n NEED TO ADD PLAYER SEASON TO UPDATE");
        return;
    } 
    
    var playerToUpdate = data.filter(element => element.PLAYER_NAME == updatePlayer && updateSeason == element.SEASON)[0];
    var originalPlayer = JSON.stringify(playerToUpdate);
    
    if(!playerToUpdate){
        alert("Player not found!");
        return;
    }
    var nName = document.getElementById("update_name").value
    var nTID = document.getElementById("update_teamID").value
    var nPID = document.getElementById("update_playerID").value
    var nSeason = document.getElementById("update_pseason").value
    
    if(nName == "" && nTID == "" && nPID == "" && nSeason == ""){
        alert("Nothing to update!")
        return;
    }

    if(nName != ""){
        playerToUpdate.PLAYER_NAME = nName;
    }
    if(nTID != ""){
        playerToUpdate.TEAM_ID = nTID;
    }
    if(nPID != ""){
        playerToUpdate.PLAYER_ID = nPID;
    }
    if(nSeason != ""){
        playerToUpdate.SEASON = nSeason;
    }
    
    document.getElementById("data").innerText = JSON.stringify(data);

    var player = JSON.stringify(playerToUpdate);
    send = originalPlayer + ',' + player
    xhru.send(send);
    return;
}