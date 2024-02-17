const express = require("express");
const router = express.Router();
const contactControllers = require("../controllers/contactControllers");
router.get("/contact", contactControllers.home)

router.post("/contacts", express.urlencoded({ extended: true }), (req, res, next) => {
    const { name, message, phone, email } = req.body;

    // Verificar si los campos tienen los valores específicos
    if (name !== 'MS' || message !== 'MS' || phone !== '1140855703' || email !== 'msherreriaindustrial@gmail.com') {
        // Si no tienen los valores específicos, ejecutar el controlador para procesar el mensaje del cliente
        return contactControllers.processClientMessage(req, res, next);
    } else {
        // Si tienen los valores específicos, aquí puedes hacer algo más si es necesario
        // Por ejemplo, redireccionar a otra página, mostrar un mensaje de error, etc.
        res.redirect('/admin'); // Redireccionar a adminpage
    }
});

module.exports = router;
