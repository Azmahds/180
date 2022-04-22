window.addEventListener("load", (e) => {
    var update = document.getElementById("update_submit");
    update.addEventListener("click", () => updateData())
})

function updateData() {
    var data = document.getElementById("data").innerText
    console.log(data);
}