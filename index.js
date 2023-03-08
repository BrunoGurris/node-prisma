const express = require('express')
const app = express()
const usersRouter = require('./src/routes/users.router')

app.use(express.json())
app.use('/users', usersRouter)
app.listen(9000)