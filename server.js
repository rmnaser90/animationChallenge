const express = require('express')
const app = express()
const port = 3000
const PATH = require('path')
app.use(express.static(PATH.join(__dirname,'/')))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))