const moment = require("moment")
const express = require('express')
const path = require("path")
const postRouter = require('./routers/postRouter')

const app = express()



const PORT = 8000
const HOST = 'localhost'
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'templates'))
app.use('/static/', express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.use('/post/', postRouter)

function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/date/', (req, res) => {
    res.render('date')
    getDate()
})

app.get('/user/', (req, res) => {
    res.render("user")
})


app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})
