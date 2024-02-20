const path = require('path');
const db = require('../database/models'); 
const { Op } = db.Sequelize;

    const deleteProductControllers = {
        deleteProductPage: function(req, res) {
            db.Productos.findAll()
            .then(function(productos) {
                const ruta = path.join(__dirname, '../views/deleteProduct');
                res.render(ruta, { productos: productos });
            })
            .catch(function(error) {
                console.error("Error al obtener la lista de productos:", error);
                res.status(500).send("Error interno del servidor");
            });
        },
        deleteProduct: function(req, res) {
            const productId = req.body.productId;
    
            // Aquí ejecutas la lógica para eliminar el producto con el ID proporcionado
            db.Productos.destroy({ where: {
                id: { 
                    [Op.eq]  : productId } } })
            .then(function() {
                res.render(path.join(__dirname, '../views/admin'));
            })
            .catch(function(error) {
                console.error("Error al eliminar el producto:", error);
                res.status(500).send("Error interno del servidor");
            });
        }
    };
    

module.exports = deleteProductControllers;
