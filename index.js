const express = require('express')
const app = express()
const authRouter = require('./src/routes/auth.router')
const usersRouter = require('./src/routes/users.router')

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', usersRouter)

app.listen(9000)