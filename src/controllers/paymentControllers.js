const path = require("path");
const express = require("express");
const mercadopago = require("mercadopago");

const paymentControllers = {
    payments: (req, res) => {
        res.render(path.join(__dirname, "../views/payments"), { req: req });
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