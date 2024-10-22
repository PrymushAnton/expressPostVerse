// const moment = require("moment")
// const express = require('express')
// const path = require("path")
// const postRouter = require('./routers/postRouter')


import express, { Express, Request, Response } from 'express'
import { join } from 'path'
import moment from 'moment'
import { router } from './PostApp/postRouter'


const app: Express = express()

const PORT = 8000
const HOST = 'localhost'
app.set("view engine", "ejs")
app.set("views", join(__dirname, 'templates'))
app.use('/static/', express.static(join(__dirname, 'static')))
app.use(express.json())
app.use('/post/', router)

function getDate(){
    console.log(moment().format("YYYY/MM/DD hh:mm:ss"))
}


app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.get('/date/', (req: Request, res: Response) => {
    res.render('date')
    getDate()
})

app.get('/user/', (req: Request, res: Response) => {
    res.render("user")
})


app.listen(PORT, HOST, () =>{
    console.log("http://localhost:8000")
})
