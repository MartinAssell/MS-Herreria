const path = require('path');
const db = require('../database/models'); 

    const editProductControllers = {
        editProductPage: function(req, res) {
            db.Productos.findAll()
            .then(function(productos) {
                const ruta = path.join(__dirname, '../views/editProduct');
                res.render(ruta, { productos: productos });
            })
            .catch(function(error) {
                console.error("Error al obtener la lista de productos:", error);
                res.status(500).send("Error interno del servidor");
            });
        },
        updateProduct: function(req, res) {
            const productId = req.body.productId; // Asegúrate de tener un campo oculto en tu formulario con el ID del producto
            const updatedProductData = {
                product_name: req.body.product_name,
                description: req.body.description,
                price: req.body.price

            };
    
            db.Productos.update(updatedProductData, { where: { id: productId } })
            .then(function() {
                res.redirect('/gallery'); // Redirige a la página principal después de la actualización
            })
            .catch(function(error) {
                console.error("Error al actualizar el producto:", error);
                res.status(500).send("Error interno del servidor");
            });
        }
    };
    

module.exports = editProductControllers;
