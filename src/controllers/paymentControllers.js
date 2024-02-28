const path = require("path");
const express = require("express");
const mercadopago = require("mercadopago");
const db = require("../database/models");

const paymentControllers = {
    payments: function (req, res) { // Corrected syntax: 'payments:' instead of 'payments function'
        db.Productos.findAll()
        .then(function(productos){
            const ruta= path.join(__dirname, "../views/payments");

            res.render(ruta, { productos: productos, req: req });
        })
        .catch(function(err) {
            // Handling any errors that might occur during the database query
            console.error('Error occurred while fetching productos:', err);
            res.status(500).send('Internal Server Error'); // Sending a generic error response
        });
    }
};

const mercadoPagoPublicKey = process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY;
if (!mercadoPagoPublicKey) {
    console.log("Error: public key not defined");
    process.exit(1);
}

const mercadoPagoAccessToken = process.env.MERCADO_PAGO_SAMPLE_ACCESS_TOKEN;
if (!mercadoPagoAccessToken) {
    console.log("Error: access token not defined");
    process.exit(1);
}

const client = new mercadopago.MercadoPagoConfig({
    accessToken: mercadoPagoAccessToken
});

module.exports= paymentControllers.MERCADO_PAGO_SAMPLE_PUBLIC_KEY