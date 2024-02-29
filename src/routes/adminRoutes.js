const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const adminControllers = require("../controllers/adminControllers");
const getAllProducts = require("../controllers/getAllProducts");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/uploads"))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_photo${path.extname(file.originalname)}`)
    },
})
const uploadBar = multer({storage})


router.get("/admin", adminControllers.home)

router.post("/products", uploadBar.single("image"),getAllProducts.create )

module.exports = router;