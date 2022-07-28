const express = require('express')
const app = express()
const path = require('path')
const port = (8000);

app.use(express.static('public'))

app.get('/sum', (req, res) =>{
    res.sendFile(path.join(__dirname, "/html/plus.html"))
})

app.get('/con', (req, res) =>{
    res.sendFile(path.join(__dirname, "/html/converter.html"))
})

app.listen(port, ()=>{
    console.log("ok", port);
})