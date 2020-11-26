// Application Servises
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

// Middlewares
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

// Mongo Connector Function
import connectDB from './config/DB.js'

// Application Routes
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

// Dotenv Init
dotenv.config()

// MongoDB Connection
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)