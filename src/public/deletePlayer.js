var xhrd = new XMLHttpRequest();
xhrd.open("POST", '/deletePlayer', true);

//Send the proper header information along with the request
xhrd.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


window.addEventListener("load", (e) => {
    var deleting = document.getElementById("delete_submit");
    deleting.addEventListener("click", () => deleteJSON())
})

function deleteJSON() {
    var data = JSON.parse(document.getElementById("data").innerText);
    var player = document.getElementById("delete_name").value;
    var found = false;
    console.log(data[0]);
    for(let i = 0; i < data.length; ++i) {
        if (player == data[i].PLAYER_NAME) {
            data.splice(i, 1)
            found = true;
            console.log("deleted")
        }
    }

    if (found == false) {
        alert("player not found")
    }

    document.getElementById("data").innerText = JSON.stringify(data);
    var deleted = JSON.stringify(player);
    send = deleted;
    console.log(send);
    xhrd.send(deleted);
    return;
}


