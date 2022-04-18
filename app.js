const express = require("express");
const app = express();

const fs = require('fs');
const readline = require('readline');

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});


async function processLineByLine() {
    const fileStream = fs.createReadStream('teams.csv');
  
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      console.log(`Line from file: ${line}`);
    }
  }
  
   processLineByLine();

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});