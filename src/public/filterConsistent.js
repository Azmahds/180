var all_g;
var home_g;
var away_g;
window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    all_g = getData(document.getElementById("allData"));
    home_g = getData(document.getElementById("homeData"));
    away_g = getData(document.getElementById("awayData"));
    createTable(0,0,0);

    setInterval(mostWins, 5000);
    // setInterval(() => console.log(document.getElementById("allData").innerText), 5000)
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

function createTable(h, v, a){ //NUMBER, TEAM NAME, TEAM_ID, TOTAL WINS
    var all = getData(document.getElementById("allData"));
    var home = getData(document.getElementById("homeData"));
    var away = getData(document.getElementById("awayData"));
    
    var data;

    for(let tableNum = 0; tableNum < 3; ++tableNum){
        var table;
        if(tableNum == 0){
            if(a){continue;}
            document.getElementById("body").innerHTML = "";
            table = document.getElementById("body");
            data = all;
        }
        else if(tableNum == 1){
            if(h){continue;}
            document.getElementById("hbody").innerHTML = "";
            table = document.getElementById("hbody");
            data = home;
        }
        else{
            if(v){continue;}
            document.getElementById("abody").innerHTML = "";
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
        teamName = "https://logos-world.net/wp-content/uploads/2020/05/Boston-Celtics-emblem.jpg";

    }
    else if(teamID == 1610612748) {
        teamName = "https://blog.logomyway.com/wp-content/uploads/2021/07/miami-heat-logo.png";
    }
    else if(teamID == 1610612740) {
        teamName = "https://www.si.com/.image/t_share/MTY4MjU5MTI5MDMxODYyMTQ1/image-placeholder-title.jpg";
    }
    else if(teamID == 1610612745) {
        teamName = "https://wallpapercave.com/wp/wp1844063.jpg";
    }
    else if(teamID == 1610612737) {
        teamName = "https://cdn.vox-cdn.com/thumbor/D2POE6qQQCUSprUUGb6mUy2qw84=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8576931/8452_atlanta_hawks_alternate_2016.png";
    }
    else if(teamID == 1610612751) {
        teamName = "https://patch.com/img/cdn/users/68453/2012/05/raw/842b4607fd503508899d7e15b062a4d5.jpg";
    }
    else if(teamID == 1610612765) {
        teamName = "https://logos-world.net/wp-content/uploads/2020/05/Detroit-Pistons-emblem.jpg";
    }
    else if(teamID == 1610612744) {
        teamName = "https://1000logos.net/wp-content/uploads/2018/01/golden-state-warriors-new-logo.jpg";
    }
    else if(teamID == 1610612747) {
        teamName = "https://1000logos.net/wp-content/uploads/2017/03/los-angeles-lakers-logo.jpg";
    }
    else if(teamID == 1610612750) {
        teamName = "https://logos-world.net/wp-content/uploads/2020/05/Minnesota-Timberwolves-emblem.jpg";
    }
    else if(teamID == 1610612753) {
        teamName = "https://hyperpix.net/wp-content/uploads/2020/06/orlando-magic-logo-font-free-download-856x484.jpg";
    }
    else if(teamID == 1610612755) {
        teamName = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Philadelphia_76ers_Logo.svg/1200px-Philadelphia_76ers_Logo.svg.png";
    }
    else if(teamID == 1610612762) {
        teamName = "https://www.si.com/.image/t_share/MTY4MTI4MjA2MzQ3MDUyMzA1/jazz3jpg.jpg";
    }
    else if(teamID == 1610612746) {
        teamName = "https://logowik.com/content/uploads/images/la-clippers7166.jpg";
    }
    else if(teamID == 1610612741) {
        teamName = "https://1000logos.net/wp-content/uploads/2016/11/Chicago-Bulls-Emblem.jpg";
    }
    else if(teamID == 1610612743) {
        teamName = "https://ewscripps.brightspotcdn.com/dims4/default/ea7f82c/2147483647/strip/true/crop/640x360+0+60/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2018%2F06%2F06%2Fdenver%20nuggets_new%20primary%20logo_1528350469591.jpg_89081663_ver1.0_640_480.jpg";
    }
    else if(teamID == 1610612756) {
        teamName = "https://wallpaperaccess.com/full/1297668.jpg";
    }
    else if(teamID == 1610612757) {
        teamName = "https://wp.usatodaysports.com/wp-content/uploads/sites/90/2019/04/unknown-2.jpeg";
    }
    else if(teamID == 1610612758) {
        teamName = "https://content.sportslogos.net/news/2016/04/Kings-New-Logo-confirmed.png";
    }
    else if(teamID == 1610612760) {
        teamName = "https://sports.cbsimg.net/images/visual/whatshot/Oklahoma_City_Thunder2.jpg";
    }
    else if(teamID == 1610612764) {
        teamName = "https://content.sportslogos.net/logos/6/219/full/3g5wchibh2ltoh617fcpgmfio.png";
    }
    else if(teamID == 1610612766) {
        teamName = "https://images.squarespace-cdn.com/content/v1/54a827bae4b0375c084b16b6/1423092102396-4WQPI4EA3AVS1JDCDM88/image-asset.png?format=1500w";
    }
    else if(teamID == 1610612742) {
        teamName = "https://1000logos.net/wp-content/uploads/2018/05/Dallas-Mavericks-Logo-Color.jpg";

    }
    else if(teamID == 1610612749) {
        teamName = "https://wallpaperaccess.com/full/3331979.jpg";
    }
    else if(teamID == 1610612752) {
        teamName = "https://i.pinimg.com/originals/b6/a2/d2/b6a2d250ebfa7ef701fbca24be0f91f6.jpg";
    }
    else if(teamID == 1610612754) {
        teamName = "https://1000logos.net/wp-content/uploads/2018/06/Indiana-Pacers-Logo-1990.jpg";
    }
    else if(teamID == 1610612759) {
        teamName = "https://content.sportslogos.net/logos/6/233/full/827.png";
    }
    else if(teamID == 1610612761) {
        teamName = "https://wallpaperaccess.com/full/1088198.jpg";
    }
    else if(teamID == 1610612763) {
        teamName = "https://rare.design/wp-content/uploads/2019/11/Memphis-Grizzlies-Logo-emblem-1024x731.jpg";
    }
    else if(teamID == 1610612739) {
        teamName = "https://www.cleveland.com/resizer/IdQUPZZSGUGyhe-f3SvrDoqb7FM=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.cleveland.com/home/cleve-media/width2048/img/startingblocks/photo/new-cavaliers-primary-logojpg-ecde4d110d8b58e4.jpg";
    }

    return teamName;
}

function mostWins(){
    var all = getData(document.getElementById("allData"));
    var home = getData(document.getElementById("homeData"));
    var away = getData(document.getElementById("awayData"));
    
    var h = false;
    var v = false; 
    var a = false;

    if(compare(all, all_g)){
        a = true;
        all_g = all;
        console.log("all updated");
    }
    if(compare(home, home_g)){
        h = true;
        home_g = home;
        console.log("home updated");
    }
    if(compare(away, away_g)){
        v = true;
        away_g = away;
        console.log("away updated");
    }

    createTable(h, v, a);
  }

  function compare(a, b){
      if(a.length != b.length){return false;}

      for(let i = 0; i < a.length; ++i){
          for(let j = 0; j < 2; ++j){
              if(a[i][j] != b[i][j]){
                  return true;
              }
          }
      }
      return false;
  }