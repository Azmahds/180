// const express = require('express')
// const app = express()
// const port = 3000

const fs = require('fs');
const readline = require('readline');

window.addEventListener("load", (event) => {
    document.getElementById("buttonid").addEventListener("click", () => {
        console.log("clicked");
        processLineByLine()});
});

async function processLineByLine() {
  const fileStream = fs.createReadStream('teams.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  var body = document.getElementById("test");
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
    body.innerHTML += line;
  }
}

// processLineByLine();

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
