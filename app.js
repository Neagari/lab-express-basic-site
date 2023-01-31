const express = require('express');
const app = express();
const port = 3000

app.use(express.static('public'))

//make a route
app.get('/',(req,res)=>{
    console.log(req.url)
    res.sendFile(__dirname + '/views/homePage.html')
})

app.get('/about',(req,res)=>{
    console.log(req.url)
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/works',(req,res)=>{
    console.log(req.url)
    res.sendFile(__dirname + '/views/works.html')
})

app.get('/photoGallery',(req,res)=>{
    console.log(req.url)
    res.sendFile(__dirname + '/views/photoGallery.html')
})

app.listen(port,()=>{
    console.log(`now listening on port ${port}`)
})