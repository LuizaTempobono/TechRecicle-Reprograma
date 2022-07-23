//chamar o express para acessar o método Router
const express = require("express")
//chamar o controller 
const controller = require("../controller/userController")
//criar uma variavel para router
const router = express.Router()

//criar as rotas
router.get("/all", controller.getAll)

router.get("/filter/:id", controller.getById)

router.get("/filterName", controller.getByName)

router.post("/create", controller.createUser)

router.put("/update/:id", controller.updateUser) 

router.delete("/delete/:id", controller.deleteUser)

//exportar o router 
module.exports = router