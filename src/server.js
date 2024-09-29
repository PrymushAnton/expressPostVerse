const moment = require("moment")
const express = require('express')
const path = require("path")

const app = express()

const PORT = 8000
const HOST = 'localhost'
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, 'templates'))
app.use('/static/', express.static(path.join(__dirname, 'static')))

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

app.get("/posts/", (req, res) =>{
    context = {
        posts:[
            {
                name: 'NodeJS is so cool!',
                author: 'Serjik',
                text: "Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow"
            },
            {
                name: 'How to center a div?',
                author: 'Tosha',
                text: 'Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow Lorem ipsum abv yay cool wow'
            },
            {
                name: 'What color of nail polish is in trend today?',
                author: "Kamilla",
                text: 'Lorem ipsum abv yay cool wow'
            }
        ]
    }
    res.render('posts', context)
})

app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})


