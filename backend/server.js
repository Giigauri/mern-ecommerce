const express = require('express')

const Products = require('./Data/products')

const app = express()

app.get('/api/products', (req, res) => {
    res.json(Products)
})

app.get('/api/products/:id', (req, res) => {
    const Product = Products.find((p) => p._id === req.params.id)

    res.json(Product)
})

app.listen(5000, console.log('Server running on port 5000'))