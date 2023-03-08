const express = require('express')
const app = express()
const authRouter = require('./src/routes/auth.router')
const usersRouter = require('./src/routes/users.router')
const booksRouter = require('./src/routes/books.router')

app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/books', booksRouter)

app.listen(9000)