const { urlencoded } = require('express')
const express = require('express')
const app = express()
const mainRoutes = require('./routes/main.routes')

app.use(express.json())
app.use(urlencoded({ extended: false }))

app.use('/jokes', mainRoutes)

const port = process.env.PORT || 3002
app.listen(port, ()=> {console.log(`running on port: ${port}`)})