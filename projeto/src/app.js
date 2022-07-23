//importar o express e o cors
const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

//importar o dotenv-safe
require("dotenv-safe").config()

const db = require("./database/mongoConfig")
db.connect()

app.use(express.json())

//importar as rotas com uma const
const membersRoute = require("./routes/memberRoutes")

//utilizar o metodo use para acessar a rota
app.use("/members", membersRoute)

//exportar modulo app 
module.exports = app