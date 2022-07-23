//importar o express e o cors
const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

//importar o dotenv-safe
require("dotenv").config()

const db = require("./database/mongoConfig")
db.connect()

app.use(express.json())

//importar as rotas com uma const
const usersRoute = require("./routes/usersRoutes")
const collectionRoute = require("./routes/collectionPointsRoutes")
const ewasteRoute = require("./routes/ewasteRoutes")
const loginRoute = require("./routes/loginRoutes")

//utilizar o metodo use para acessar a rota
app.get("/", (req, res) => {
    res.status(200).send({
            title: "Reprograma -> TechRecicle - Projeto Final",
            version: "1.0.0",
            mensagem: "Olá, bem vindo ao meu projeto final da Reprograna."
        })
})
app.use("/users", usersRoute)
app.use("/collectionPoints", collectionRoute)
app.use("/ewaste", ewasteRoute)
app.use("/login", loginRoute)

//exportar modulo app 
module.exports = app

