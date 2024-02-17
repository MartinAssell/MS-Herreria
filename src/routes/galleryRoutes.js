const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryControllers');

router.get('/gallery', galleryController.home);

module.exports = router;