const Productos = require('../database/models');
const db = require("../database/models");

const path = require('path');
const galleryController = {
    home: function(req, res) {
        db.Productos.findAll()
            .then(function(productos){
                const ruta = path.join(__dirname, '../views/gallery');
                res.render(ruta, { productos: productos });
            })
            .catch(function(error) {
                console.error('Error al consultar la base de datos:', error);
                res.status(500).send('Error interno del servidor');
            });
    }
};


module.exports = galleryController;

