window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    createTable();
    document.getElementById("buttonid").addEventListener("click", () => filterPlayer())
})

// caches.open('home').then( cache => {
//     cache.add('/data').then(() => {
//         console.log("data cached")
//         caches.open('home').then( cache => {
//             cache.keys('/data').then(req => console.log(req));
//         })
//     });
// })

// console.log(localStorage)


function getData(){
    let allD = document.getElementById("data");
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

function filterPlayer(){
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
        let player = data[i].PLAYER_NAME
        if(!contains(player.toLowerCase(), input.toLowerCase())){
            rows[i].hidden = true;
            continue;
        }
        rows[i].hidden = false;
        var number = rows[i].children[0];
        number.innerHTML = ++cnt;
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