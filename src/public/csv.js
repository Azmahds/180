window.addEventListener("load", (event) =>{
    console.log("Page loaded");
    var temp = this.document.getElementById("test");
    console.log("CONSOLE", temp);
    temp.innerHTML = "good morning";
})



