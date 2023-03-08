const express = require('express')
const app = express()
const usersRouter = require('./src/routes/users.router')

app.use('/users', usersRouter)

app.use(express.json())
app.listen(9000)