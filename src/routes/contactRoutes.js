const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");
router.get("/contact", contactControllers.home)

module.exports = router;
