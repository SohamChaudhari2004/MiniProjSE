import express from 'express'
import userRoutes from './route/userRoute.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(userRoutes)

export default app;