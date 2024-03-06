import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config()


connectDB().then(() => {
  console.log('Database connected')
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
}
)
