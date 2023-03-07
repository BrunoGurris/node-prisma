const express = require('express')
const app = expresss()
const router = require('./routes/router')

app.use('/', router)
app.use(express.json())
app.listen(9000)