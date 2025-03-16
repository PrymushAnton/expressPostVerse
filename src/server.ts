import express, { Express, Request, Response } from 'express'
import { join } from 'path'
import moment from 'moment'
import cookieParser from 'cookie-parser'
import cors from "cors"

import postRouter from './PostApp/postRouter'
import commentRouter from "./CommentApp/commentRouter"
import userRouter from './UserApp/userRouter'
import tagRouterApi from "./TagApp/tagRouter"
import userRouterApi from './UserApp/userRouterApi'
import postRouterApi from "./PostApp/postRouterApi"

const app: Express = express()

const PORT = 8000
const HOST = 'localhost'

app.set("view engine", "ejs")
app.set("views", join(__dirname, 'templates'))

app.use('/static/', express.static(join(__dirname, 'static')))

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api/comment/', commentRouter)
app.use('/post/', postRouter)
app.use('/', userRouter)
app.use("/api/user/", userRouterApi)
app.use('/api/post/', postRouterApi)
app.use('/api/tag/', tagRouterApi)



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


app.listen(PORT, HOST, () =>{
    console.log(`http://${HOST}:${PORT}`)
})
