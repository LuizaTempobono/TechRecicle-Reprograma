const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

require("dotenv").config()

const db = require("./database/mongoConfig")
db.connect()

app.use(express.json())

const usersRoute = require("./routes/userRoutes")
const collectionRoute = require("./routes/collectionPointsRoutes")
const ewasteRoute = require("./routes/ewasteRoutes")

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

module.exports = app

