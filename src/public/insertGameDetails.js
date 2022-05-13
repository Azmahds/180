var igd = new XMLHttpRequest();

igd.open("POST", '/insertGameDetails', true);
igd.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("Content-Type", "application/json");

window.addEventListener("load", (e) => {
    var update = document.getElementById("insert_submit");
    update.addEventListener("click", () => insertGameData())
})



function insertGameData() {
    var data = JSON.parse(document.getElementById("data").innerText);

    //var nGameD = document.getElementById("insert_name").value
    //var nGID = document.getElementById("insert_teamID").value
    //var nHTW = document.getElementById("insert_playerID").value
    var nGameD = document.getElementById("insert_GAME_DATE_EST").value
    var nGID = document.getElementById("insert_GAME_ID").value
    var nGT = document.getElementById("insert_GAME_STATUS_TEXT").value
    var nSeason = document.getElementById("insert_SEASON").value
    var nPTH = document.getElementById("insert_PTS_home").value
    var nPFGH = document.getElementById("insert_FG_PCT_home").value
    var nFG3H = document.getElementById("insert_FG3_PCT_home").value
    var nAH = document.getElementById("insert_AST_home").value
    var nRH = document.getElementById("insert_REB_home").value
    var nPTA = document.getElementById("insert_PTS_away").value
    var nFGTA = document.getElementById("insert_FG_PCT_away").value
    var nPFTA = document.getElementById("insert_FT_PCT_away").value
    var nFG3A = document.getElementById("insert_FG3_PCT_away").value
    var nAA = document.getElementById("insert_AST_away").value
    var nRA = document.getElementById("insert_REB_away").value
    var nHID = document.getElementById("insert_HOME_TEAM_ID").value
    var nVID = document.getElementById("insert_VISITOR_TEAM_ID").value
    var nHTW = document.getElementById("insert_HOME_TEAM_WINS").value
    var nPFTH = document.getElementById("insert_FT_PCT_home").value


    if(nHID == "" || nVID == "" || nHTW == ""){
        alert("Have not inserted all characteristics!")
        return;
    }
    if(nHTW != 0 && nHTW != 1){
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
        TEAM_ID_home: nHID,
        PTS_home: nPTH,
        FG_PCT_home: nPFGH,
        FT_PCT_home: nPFTH,
        FG3_PCT_home: nFG3H,
        AST_home: nAH,
        REB_home: nRH,
        TEAM_ID_away: nVID,
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

    newPlayer = JSON.stringify(insertedGame);

    var all = getData(document.getElementById("allData"));
    var home = getData(document.getElementById("homeData"));
    var away = getData(document.getElementById("awayData"));
    if(nHTW == 1){
        for(let i=0; i < all.length; ++i){
            if(all[i][0] == nHID){
                var tmp = (all[i][1] * 1) + 1;
                tmp = tmp.toString()
                all[i][1] = tmp;
                if(i != 0){
                    var t1 = tmp * 1;
                    var t2 = all[i-1][1] * 1
                    if(t2 < t1){
                        tmp = all[i];
                        all[i] = all[i-1];
                        all[i-1] = tmp
                    }
                }
            }
            if(home[i][0] == nHID){
                var tmp = (home[i][1] * 1) + 1;
                tmp = tmp.toString()
                home[i][1] = tmp;
                if(i != 0){
                    var t1 = tmp * 1;
                    var t2 = home[i-1][1] * 1
                    if(t2 < t1){
                        tmp = home[i];
                        home[i] = home[i-1];
                        home[i-1] = tmp
                    }
                }
            }
        }
        var change = /[\]["]/g
        var tmp1 = JSON.stringify(all).replace(change, '');
        var tmp2 = JSON.stringify(home).replace(change, '')

        document.getElementById("allData").innerHTML = tmp1;
        document.getElementById("homeData").innerHTML = tmp2;
    } else{
        for(let i=0; i < all.length; ++i){
            if(all[i][0] == nVID){
                var tmp = (all[i][1] * 1) + 1;
                tmp = tmp.toString();
                all[i][1] = tmp;
                if(i != 0){
                    var t1 = tmp * 1;
                    var t2 = all[i-1][1] * 1
                    if(t2 < t1){
                        tmp = all[i];
                        all[i] = all[i-1];
                        all[i-1] = tmp
                    }
                }
            }
            if(away[i][0] == nVID){
                var tmp = (away[i][1] * 1) + 1;
                tmp = tmp.toString()
                away[i][1] = tmp;
                if(i != 0){
                    var t1 = tmp * 1;
                    var t2 = away[i-1][1] * 1
                    if(t2 < t1){
                        tmp = away[i];
                        away[i] = away[i-1];
                        away[i-1] = tmp
                    }
                }
            }
        }
        all.sort(function(a,b) {
            const n1 = a[1];
            const n2 = b[1];
        
            if(n1 < n2){return 1;}
            else if(n1 > n2){return -1;}
            else{return 0;}
        });
        away.sort(function(a,b) {
            const n1 = a[1];
            const n2 = b[1];
        
            if(n1 < n2){return 1;}
            else if(n1 > n2){return -1;}
            else{return 0;}
          });
        var change = /[\]["]/g
        var tmp1 = JSON.stringify(all).replace(change, '');
        var tmp2 = JSON.stringify(away).replace(change, '');

        document.getElementById("allData").innerHTML = tmp1;
        document.getElementById("awayData").innerHTML = tmp2;
    }

    igd.send(newPlayer);
    
}


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