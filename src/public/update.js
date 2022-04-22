window.addEventListener("load", (e) => {
    var update = document.getElementById("update_submit");
    update.addEventListener("click", () => updateData())
})

function updateData() {
    var data = JSON.parse(document.getElementById("data").innerText);
    var playerToUpdate = document.getElementById("update_player").value;
    console.log(playerToUpdate);
}