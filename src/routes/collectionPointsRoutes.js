//chamar o express para acessar o método Router
const express = require("express")
//chamar o controller 
const controller = require("../controller/collectionPointsController")
//criar uma variavel para router
const router = express.Router()

//criar as rotas
router.get("/all", controller.getAll)

router.get("/filter/:id", controller.getById)

router.get("/filterName", controller.getByName)

router.post("/create", controller.createPoint)

router.put("/update/:id", controller.updatePoint) 

router.delete("/delete/:id", controller.deletePoint)

//exportar o router 
module.exports = router