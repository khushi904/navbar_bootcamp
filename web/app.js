const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res){
  res.send('<h1>Hello Arnav</h1>')
})

app.get('/second',function(req,res){
    res.send('<b>second server</b>')
})

app.get('/third',function(req,res){
    res.send('<i>third server</i>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})