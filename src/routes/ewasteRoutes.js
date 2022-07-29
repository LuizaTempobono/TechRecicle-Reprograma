const express = require("express")
const controller = require("../controller/ewasteController")
const router = express.Router()

router.get("/all", controller.getAll)

router.get("/filter/:id", controller.getById)

router.post("/create", controller.createInteraction)

router.put("/update/:id", controller.updateInteraction) 

router.delete("/delete/:id", controller.deleteInteraction)

module.exports = router