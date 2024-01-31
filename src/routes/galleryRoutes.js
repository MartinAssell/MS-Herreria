const express = require("express");
const router = express.Router();
const galleryControllers = require("../controllers/galleryControllers");
router.get("/gallery", galleryControllers.home)

module.exports = router;
