if (typeof window !== "undefined") {
        window.addEventListener("load", (event) =>{
        console.log("Page loaded");
        let data = getData();
        createTable(data);
        document.getElementById("buttonid").addEventListener("click", () => filterPlayer(data))
    })
}

function getData(){
    let allD = document.getElementById("data");
    let data = JSON.parse(allD.innerText)
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