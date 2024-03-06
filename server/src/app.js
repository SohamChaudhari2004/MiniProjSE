import express from 'express'
import userRoutes from './route/userRoute.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }))
app.use(userRoutes)

export default app;