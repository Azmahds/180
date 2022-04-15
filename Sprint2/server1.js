var http = require("http");
const fs = require("fs");
const path = require("path");
const teamsCsv = require("teams");

http
    .createServer(function(req, res) {
        const filePath = path.join(__dirname, "teams.csv");
        fs.readFile(filePath, (error, data) => {
            if (error) {
                return console.log("error reading file");
            }
            teamsCsv(data).then(parsedData => {
                res.write(JSON.stringify(parsedData, null, 2));
                res.end();
            });
        });
    })
    .listen(3000);