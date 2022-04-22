const express = require("express")
const path = require('path')

const app = express();
/*
app.use('/css', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(_dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(_dirname, 'node_modules/jquery/dist')))
*/
//telling the expression module that the public has all of our site assets.

app.use(express.static(__dirname + '/public'));

app.get("/views", (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.listen(5000, (req, res) => {
  console.log('Listening on port ' + 5000);
});
