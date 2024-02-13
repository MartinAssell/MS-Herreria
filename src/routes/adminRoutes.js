const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");
router.get("/admin", adminControllers.home)

module.exports = router;