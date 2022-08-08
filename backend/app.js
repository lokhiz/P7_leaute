const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lokhi:Carlos41!@cluster0.m0yui9o.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à la base de donnée réussie'))
  .catch(() => console.log('Connexion à la base de donnée échouée'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next()
})

app.use((req, res, next) => {
    console.log('bonjour')
    next()
})

app.use((req, res, next) => {
    res.status(201)
})


module.exports = app;