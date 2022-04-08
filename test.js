
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Lets go out like girl scouts'))
app.get('/gaybby', (req, res) => res.send('Gabby, more like Gaybby'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
