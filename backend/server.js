import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/DB.js'
import Products from './Data/products.js'
import colors from 'colors'
import morgan from 'morgan'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.get('/api/products', (req, res) => {
    res.json(Products)
})

app.get('/api/products/:id', (req, res) => {
    const Product = Products.find((p) => p._id === req.params.id)

    res.json(Product)
})

const PORT = process.env.PORT || 5000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)