const express = require("express");
const router = express.Router();
const editProductControllers = require("../controllers/editProductControllers");
router.get("/editProduct", editProductControllers.editProductPage);
router.post("/editProduct", editProductControllers.updateProduct);

module.exports = router;