const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");
const nodemailer = require('nodemailer');
router.get("/contact", contactControllers.home)
router.post("/contacts", express.urlencoded({ extended: true }), contactControllers.processMessage);


module.exports = router;

