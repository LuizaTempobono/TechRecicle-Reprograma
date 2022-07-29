const express = require("express")
const controller = require("../controller/collectionPointsController")
const router = express.Router()

router.get("/all", controller.getAll)

router.get("/filter/:id", controller.getById)

router.get("/filterName", controller.getByName)

router.get("/filterAddress", controller.getByAddress)

router.get("/filterEwaste", controller.getByEwaste)

router.post("/create", controller.createPoint)

router.put("/update/:id", controller.updatePoint) 

router.delete("/delete/:id", controller.deletePoint)

module.exports = router