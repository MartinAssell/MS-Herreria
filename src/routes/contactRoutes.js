const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");
router.get("/contact", contactControllers.home)

router.post("/contacts", express.urlencoded({ extended: true }), (req, res, next) => {
    const { name, message, phone, email } = req.body;

    if (name !== 'MS' || message !== 'MS' || phone !== '1140855703' || email !== 'msherreriaindustrial@gmail.com') {
        return contactControllers.processClientMessage(req, res, next);
    } else {
        res.redirect('/admin'); 
    }
});

module.exports = router;
