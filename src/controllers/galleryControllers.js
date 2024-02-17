const Productos = require('../database/models');
const db = require("../database/models");

const path = require('path');

const galleryController = {
    home: async (req, res) => {
        try {
            // Recupera todos los productos de la base de datos
            const productos = await db.Productos.findAll();

            // Renderiza la vista y pasa los productos a la misma
            res.render(path.join(__dirname, '../views/gallery'), { productos: productos });
        } catch (error) {
            console.error('Error al consultar la base de datos:', error);
            res.status(500).send('Error interno del servidor');
        }
    }
};


module.exports = galleryController;

