
window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    let data = getData();
    createTable(data);
    document.getElementById("buttonid").addEventListener("click", () => filterPlayer(data))
})

function getData(){
    let data = [{"PLAYER_NAME":"Royce O'Neale","TEAM_ID":"1610612762","PLAYER_ID":"1626220","SEASON":"2019"},{"PLAYER_NAME":"Bojan Bogdanovic","TEAM_ID":"1610612762","PLAYER_ID":"202711","SEASON":"2019"},{"PLAYER_NAME":"Rudy Gobert","TEAM_ID":"1610612762","PLAYER_ID":"203497","SEASON":"2019"},{"PLAYER_NAME":"Donovan Mitchell","TEAM_ID":"1610612762","PLAYER_ID":"1628378","SEASON":"2019"},{"PLAYER_NAME":"Mike Conley","TEAM_ID":"1610612762","PLAYER_ID":"201144","SEASON":"2019"},{"PLAYER_NAME":"Joe Ingles","TEAM_ID":"1610612762","PLAYER_ID":"204060","SEASON":"2019"},{"PLAYER_NAME":"Ed Davis","TEAM_ID":"1610612762","PLAYER_ID":"202334","SEASON":"2019"},{"PLAYER_NAME":"Jeff Green","TEAM_ID":"1610612762","PLAYER_ID":"201145","SEASON":"2019"},{"PLAYER_NAME":"Dante Exum","TEAM_ID":"1610612762","PLAYER_ID":"203957","SEASON":"2019"},{"PLAYER_NAME":"Emmanuel Mudiay","TEAM_ID":"1610612762","PLAYER_ID":"1626144","SEASON":"2019"},{"PLAYER_NAME":"Georges Niang","TEAM_ID":"1610612762","PLAYER_ID":"1627777","SEASON":"2019"},{"PLAYER_NAME":"Tony Bradley","TEAM_ID":"1610612762","PLAYER_ID":"1628396","SEASON":"2019"}]
    return data;
}

function createTable(data){
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

function filterPlayer(data){
    const input = document.getElementById("user-input").value;
    var table = document.getElementById("body");
    table.innerHTML = "";
    
    // console.log(typeof input, input.length);
    if(input.length == 0){
        createTable(data);
        return;
    }

    for (let i = 0; i < data.length; i++) {
        let player = [data[i].PLAYER_NAME, data[i].TEAM_ID, data[i].PLAYER_ID, data[i].SEASON];
        if(!contains(player[0].toLowerCase(),input.toLowerCase())){
            continue;
        }
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

function contains(tar, substr){
    for(let i = 0; i < tar.length; ++i){
        if(tar[i] == substr[0]){
            for(let j = 0; j < substr.length; ++j){
                if(tar[i+j] != substr[j]){
                    return false;
                }
            }
            return true;
        }
    }
    return false
}