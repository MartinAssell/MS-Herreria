const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");

router.post('/contacts', contactControllers.processMessage)
router.get("/contact", contactControllers.home)

module.exports = router;
