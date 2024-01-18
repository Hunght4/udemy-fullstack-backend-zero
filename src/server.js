require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')

const app = express()
const port = process.env.PORT || 8888
const hostname = process.env.HOST_NAME

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true})) //for form date

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRouters);

//test connection


//simple query


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})