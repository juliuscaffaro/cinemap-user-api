// app.js
const serverless = require('serverless-http')
const express = require('express')
require('src/db/db')
const userRouter = require('src/routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

module.exports.handler = serverless(app)