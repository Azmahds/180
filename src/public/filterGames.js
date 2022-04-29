window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    populateOptions();
    // createTable();
    document.getElementById("buttonid").addEventListener("click", () => filterGD())
    document.getElementById("efficient").addEventListener("click", () => efficientTeamsTable());
})

function getData(){
    let allD = document.getElementById("gamesData");
    let data = JSON.parse(allD.innerText)
    // var this_js_script = $('script[src*=filterGames]'); //get data passed through from script
    // var data = JSON.parse(this_js_script.attr('all_data'));
    return data;
}

function populateOptions(){
    let options = [];
    var data = getData();
    data.forEach(element => {
        if(options.indexOf(element.HOME_TEAM_ID) == -1){
            options.push(element.HOME_TEAM_ID);
        }
    });
    let select = document.getElementById("user-input");

    options.forEach(el => {
        var option = document.createElement("option");
        option.value = el;
        option.text = match(el);
        select.add(option);
    });
}

function createTable(){
    var data = getData();
    var table = document.getElementById("body");
    
    for (let i = 0; i < data.length; i++) {
        let player = [data[i].HOME_TEAM_ID, data[i].VISITOR_TEAM_ID, data[i].PTS_home, data[i].REB_home, data[i].AST_home , data[i].FG_PCT_home , data[i].FT_PCT_home , data[i].FG3_PCT_home , data[i].PTS_away , data[i].REB_away , data[i].AST_away , data[i].FG_PCT_away , data[i].FT_PCT_away , data[i].FG3_PCT_away];
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

function efficientTeamsTable(){
    var met = document.getElementById("MET").innerHTML;
    var table = document.getElementById("ebody");

    //eventually make this in a for loop with all rankings but for now its only one entry

    var row = table.insertRow(-1);
    var cell = row.insertCell(0);
    cell.innerHTML = 1;

    cell = row.insertCell(1);
    cell.innerHTML = match(met);
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
