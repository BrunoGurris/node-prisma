const express = require('express')
const app = express()
const routerUsers = require('./src/routes/users.router')

app.use('/users', routerUsers)
app.use(express.json())
app.listen(9000)