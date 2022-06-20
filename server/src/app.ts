require('dotenv').config()
import express, { Express } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import todoRoutes from './routes'

const app: Express = express()

const PORT: string | number = 4000

app.use(express.json())
app.use(cors({
    origin: '*'
}));
app.use(todoRoutes)

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/admin?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set('useFindAndModify', false)

mongoose
    .connect(uri, options)
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running`)
        )
    )
    .catch((error) => {
	throw error
    })
