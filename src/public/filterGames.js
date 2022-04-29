window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    populateOptions();
    createTable();
    document.getElementById("buttonid").addEventListener("click", () => filterGD())
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
            console.log("push")
            options.push(element.HOME_TEAM_ID);
        }
    });
    let select = document.getElementById("user-input");

    options.forEach(el => {
        var option = document.createElement("option");
        option.value = el;
        option.text = el;
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
