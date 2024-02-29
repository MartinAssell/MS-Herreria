const path = require("path");
const express = require("express");
const db = require("../database/models");

const paymentControllers = {
    payments: function (req, res) { 

        const imageUrl = req.query.image;
        const description = req.query.description || 'Descripción por defecto';
        const price = req.query.price || 'Precio por defecto';
        const productName = req.query.productName || 'Nombre por defecto';
        const ruta = path.join(__dirname, "../views/payments");

        console.log(imageUrl, description, price, productName); 

        res.render(ruta, {
            imageUrl: imageUrl,
            newProductName: productName, // Cambié productName por newProductName
            newDescription: description, // Cambié description por newDescription
            newPrice: price, // Cambié price por newPrice
        });
    }
};


module.exports = paymentControllers;
