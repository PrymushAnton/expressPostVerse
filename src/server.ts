// const moment = require("moment")
// const express = require('express')
// const path = require("path")
// const postRouter = require('./routers/postRouter')


import express, { Express, Request, Response } from 'express'
import { join } from 'path'
import moment from 'moment'
import postRouter from './PostApp/postRouter'
import commentRouter from "./CommentApp/commentRouter"
import userRouter from './UserApp/userRouter'
import tagRouter from "./TagApp/tagRouter"
import cookieParser from 'cookie-parser'
import postRouterApi from "./PostApp/postRouterApi"
import cors from "cors"

const app: Express = express()

const PORT = 8000
const HOST = 'localhost'
// тут отделить бы
app.set("view engine", "ejs")
app.set("views", join(__dirname, 'templates'))

app.use('/static/', express.static(join(__dirname, 'static')))

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/', commentRouter)
app.use('/post/', postRouter)
app.use('/', userRouter)
app.use('/api/post/', postRouterApi)
// tagRouterApi
app.use('/api/tag/', tagRouter)



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
// не нужно здесь
app.get('/user/', (req: Request, res: Response) => {
    res.render("user")
})


app.listen(PORT, HOST, () =>{
    // не используешь PORT и HOST
    console.log("http://localhost:8000")
})
