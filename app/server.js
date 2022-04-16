
const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/express_backend', (req, res) => {
    console.log(req);
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
});