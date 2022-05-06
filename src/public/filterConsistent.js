window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    createTable();
})

function getData(passedData){ // home, away, or all data
    var dataString = passedData.innerText.split(',');
    var data = [];

    for(let i = 0; i < dataString.length; ++i){
        if(i % 2 == 0){
            var combinedData = [dataString[i], dataString[i+1]];
            data.push(combinedData)
        }
    }
    return data;
}

function createTable(){ //NUMBER, TEAM NAME, TEAM_ID, TOTAL WINS
    var all = getData(document.getElementById("allData"));
    var home = getData(document.getElementById("homeData"));
    var away = getData(document.getElementById("awayData"));

    var data;

    for(let tableNum = 0; tableNum < 3; ++tableNum){
        var table;
        if(tableNum == 0){
            table = document.getElementById("body");
            data = all;
        }
        else if(tableNum == 1){
            table = document.getElementById("hbody");
            data = home;
        }
        else{
            table = document.getElementById("abody");
            data = away;
        }
        
        for (let i = 0; i < data.length; i++) {
            let player =  data[i];
            var row = table.insertRow(-1);
            var pidx = 0;
            var cell;
            for(let j = 0; j < 4; ++j){
                cell = row.insertCell(j);
                if(j == 0){
                    cell.innerHTML = i + 1;
                }
                else if(j == 1){
                    cell.innerHTML = match(player[0])
                }
                else{
                    cell.innerHTML = player[pidx];
                    ++pidx;
                }
                cell.style = "text-align: center"
            }
            if(data == all){
                continue;
            }
            
            cell = row.insertCell(-1);
            var img = document.createElement("img");
            img = new Image(50,50);
            img.src = getImage(player[0]);
            cell.appendChild(img)
        }
    }
}

function filterGD(){
    var data = getData();
    let input = document.getElementById("user-input").value;
    var table = document.getElementById("body");
    var rows = table.children;

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
        let home = data[i].HOME_TEAM_ID
        let visitor = data[i].VISITOR_TEAM_ID
        if(home != input && visitor != input){
            rows[i].hidden = true;
            continue;
        }
        rows[i].hidden = false;
        var number = rows[i].children[0];
        number.innerHTML = ++cnt;
    }
}

function consistentTeamsTable(){
    var met = document.getElementById("MET").innerHTML;
    var pic = document.getElementById("GSW").innerHTML;
    var table = document.getElementById("ebody");

    //eventually make this in a for loop with all rankings but for now its only one entry

    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 1;

    cell = row.insertCell(1);
    cell.innerHTML = match(met);
    var img = document.createElement("img");
    img = new Image(100,100);
    img.src = "https://1000logos.net/wp-content/uploads/2018/01/golden-state-warriors-new-logo.jpg";
    cell = row.insertCell(2);
    cell.appendChild(img);
    

}

function match(id) {
    var teamID = id;
    var teamName = "N/A";

    if(teamID == 1610612738) {
        teamName = "BOS";

    }
    else if(teamID == 1610612748) {
        teamName = "MIA";
    }
    else if(teamID == 1610612740) {
        teamName = "NOP";
    }
    else if(teamID == 1610612745) {
        teamName = "HOU";
    }
    else if(teamID == 1610612737) {
        teamName = "ATL";
    }
    else if(teamID == 1610612751) {
        teamName = "BKN";
    }
    else if(teamID == 1610612765) {
        teamName = "DET";
    }
    else if(teamID == 1610612744) {
        teamName = "GSW";
    }
    else if(teamID == 1610612747) {
        teamName = "LAL";
    }
    else if(teamID == 1610612750) {
        teamName = "MIN";
    }
    else if(teamID == 1610612753) {
        teamName = "ORL";
    }
    else if(teamID == 1610612755) {
        teamName = "PHI";
    }
    else if(teamID == 1610612762) {
        teamName = "UTA";
    }
    else if(teamID == 1610612746) {
        teamName = "LAC";
    }
    else if(teamID == 1610612741) {
        teamName = "CHI";
    }
    else if(teamID == 1610612743) {
        teamName = "DEN";
    }
    else if(teamID == 1610612756) {
        teamName = "PHX";
    }
    else if(teamID == 1610612757) {
        teamName = "POR";
    }
    else if(teamID == 1610612758) {
        teamName = "SAC";
    }
    else if(teamID == 1610612760) {
        teamName = "OKC";
    }
    else if(teamID == 1610612764) {
        teamName = "WAS";
    }
    else if(teamID == 1610612766) {
        teamName = "CHA";
    }
    else if(teamID == 1610612742) {
        teamName = "DAL";

    }
    else if(teamID == 1610612749) {
        teamName = "MIL";
    }
    else if(teamID == 1610612752) {
        teamName = "NYK";
    }
    else if(teamID == 1610612754) {
        teamName = "IND";
    }
    else if(teamID == 1610612759) {
        teamName = "SAS";
    }
    else if(teamID == 1610612761) {
        teamName = "TOR";
    }
    else if(teamID == 1610612763) {
        teamName = "MEM";
    }
    else if(teamID == 1610612739) {
        teamName = "CLE";
    }

    return teamName;
}

function getImage(id){
    var teamID = id;
    var teamName = "N/A";

    if(teamID == 1610612738) {
        teamName = "BOS";

    }
    else if(teamID == 1610612748) {
        teamName = "MIA";
    }
    else if(teamID == 1610612740) {
        teamName = "NOP";
    }
    else if(teamID == 1610612745) {
        teamName = "HOU";
    }
    else if(teamID == 1610612737) {
        teamName = "ATL";
    }
    else if(teamID == 1610612751) {
        teamName = "BKN";
    }
    else if(teamID == 1610612765) {
        teamName = "DET";
    }
    else if(teamID == 1610612744) {
        teamName = "GSW";
    }
    else if(teamID == 1610612747) {
        teamName = "LAL";
    }
    else if(teamID == 1610612750) {
        teamName = "MIN";
    }
    else if(teamID == 1610612753) {
        teamName = "ORL";
    }
    else if(teamID == 1610612755) {
        teamName = "PHI";
    }
    else if(teamID == 1610612762) {
        teamName = "UTA";
    }
    else if(teamID == 1610612746) {
        teamName = "LAC";
    }
    else if(teamID == 1610612741) {
        teamName = "CHI";
    }
    else if(teamID == 1610612743) {
        teamName = "DEN";
    }
    else if(teamID == 1610612756) {
        teamName = "PHX";
    }
    else if(teamID == 1610612757) {
        teamName = "POR";
    }
    else if(teamID == 1610612758) {
        teamName = "SAC";
    }
    else if(teamID == 1610612760) {
        teamName = "OKC";
    }
    else if(teamID == 1610612764) {
        teamName = "WAS";
    }
    else if(teamID == 1610612766) {
        teamName = "CHA";
    }
    else if(teamID == 1610612742) {
        teamName = "DAL";

    }
    else if(teamID == 1610612749) {
        teamName = "MIL";
    }
    else if(teamID == 1610612752) {
        teamName = "NYK";
    }
    else if(teamID == 1610612754) {
        teamName = "IND";
    }
    else if(teamID == 1610612759) {
        teamName = "SAS";
    }
    else if(teamID == 1610612761) {
        teamName = "TOR";
    }
    else if(teamID == 1610612763) {
        teamName = "MEM";
    }
    else if(teamID == 1610612739) {
        teamName = "CLE";
    }

    return teamName;
}