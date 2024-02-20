const express = require("express");
const router = express.Router();
const db=require('../database/models')
const Op = db.Sequelize.Op

const deleteProductControllers = require("../controllers/deleteProductControllers");

router.get("/deleteProduct", deleteProductControllers.deleteProductPage);
router.post("/deleteProduct", deleteProductControllers.deleteProduct);

module.exports = router;