const db = require("../database/models");
const Op = db.Sequelize.Op
const path = require('path');

const getAllProducts = {
    list: function(req, res) {
        db.Productos.findAll()
        .then(function(productos){
            const ruta = path.join(__dirname, '../views/products');
            res.render(ruta, { req: req, productos: productos });
        })
        .catch(function(error) {
            console.error("Error al obtener la lista de productos:", error);
            res.status(500).send("Error interno del servidor");
        });
    },
    create: function(req, res) {
        const images = req.files.map(file => file.filename); // Obtener nombres de archivo de las imágenes cargadas
        db.Productos.create({
            product_name: req.body.product_name,
            description: req.body.description,
            images: req.body.images,
            price: req.body.price,
            category: req.body.category
        })
        .then(function(result) { 
            return db.Productos.findAll();
        })
        .then(function(productos) {
            res.render(path.join(__dirname, "../views/gallery"), { productos, req });
        })
        .catch(function(error) {
            console.error("Error al crear el producto:", error);
            res.status(500).send("Error interno del servidor");
        });
    }
    
};
 


module.exports = getAllProducts;