const express = require("express")
const controller = require("../controller/userController")
const router = express.Router()

router.get("/all", controller.getAll)

router.get("/filter/:id", controller.getById)

router.get("/filterName", controller.getByName)

router.post("/create", controller.createUser)

router.put("/update/:id", controller.updateUser) 

router.delete("/delete/:id", controller.deleteUser)

module.exports = router