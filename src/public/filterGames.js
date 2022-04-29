
window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    createTable();
    document.getElementById("buttonid").addEventListener("click", () => filterGD())
})

function getData(){
    let allD = document.getElementById("gamesData");
    let data = JSON.parse(allD.innerText)
    return data;
}

function createTable(){
    var data = getData();
    var table = document.getElementById("body");

    for (let i = 0; i < data.length; i++) {
        let player = [data[i].PLAYER_NAME, data[i].TEAM_ID, data[i].PLAYER_ID, data[i].SEASON];
        var row = table.insertRow(-1);
        for(let j = 0; j < player.length + 1; ++j){
            var cell = row.insertCell(j);
            if(j == 0){
                cell.innerHTML = i + 1;
            }
            else{
                cell.innerHTML = player[j-1];
            }
        }
    }
}

function filterGD(){
    var data = getData();
    let input = document.getElementById("user-input").value;
    var table = document.getElementById("body");
    var rows = table.children;
    
    console.log(typeof input, input.length, input);
    if(input.length == 0){
        for(let i = 0; i < data.length; ++i){
            if(rows[i].hidden){
                rows[i].hidden = false;
            }
            rows[i].children[0].innerHTML = i + 1;
        }
        return;
    }
    var cnt = 0;
    for (let i = 0; i < data.length; i++) {
        // let player = [data[i].PLAYER_NAME, data[i].TEAM_ID, data[i].PLAYER_ID, data[i].SEASON];
        let team = data[i].TEAM_ID
        if(team != input){
            rows[i].hidden = true;
            continue;
        }
        rows[i].hidden = false;
        var number = rows[i].children[0];
        number.innerHTML = ++cnt;
    }
}
function match(int) {
    var homeID;
    var awayID
    var teamName;

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
    else if(homeID == 1610612760 || awayID == 1610612760) {
        teamName = "OKC";
    }
    else if(homeID == 1610612764 || awayID == 1610612764) {
        teamName = "WAS";
    }
    else if(homeID == 1610612766 || awayID == 1610612766) {
        teamName = "CHA";
    }
    else if(homeID == 1610612742 || awayID == 1610612742) {
        teamName = "DAL";
    }
    else if(homeID == 1610612749 || awayID == 1610612749) {
        teamName = "MIL";
    }
    else if(homeID == 1610612752 || awayID == 1610612752) {
        teamName = "NYK";
    }
    else if(homeID == 1610612754 || awayID == 1610612754) {
        teamName = "IND";
    }
    else if(homeID == 1610612759 || awayID == 1610612759) {
        teamName = "SAS";
    }
    else if(homeID == 1610612761 || awayID == 1610612761) {
        teamName = "TOR";
    }
    else if(homeID == 1610612763 || awayID == 1610612763) {
        teamName = "MEM";
    }
    else if(homeID == 1610612739 || awayID == 1610612739) {
        teamName = "CLE";
    }

}
