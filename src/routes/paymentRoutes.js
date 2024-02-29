const express = require('express');
const path = require ('path')
const router = express.Router();
const paymentControllers = require('../controllers/paymentControllers');
const mercadoPagoPublicKey = process.env.MERCADO_PAGO_SAMPLE_PUBLIC_KEY;

router.get("/payments", paymentControllers.payments);

router.post("/paymentControllers", (req, res) => {
    const { body } = req;
    const { payer } = body; 
  
    const payment = new mercadopago.Payment(client);
  
    const paymentData = {
      transaction_amount: Number(body.transactionAmount),
      token: body.token,
      description: body.description,
      installments: Number(body.installments),
      payment_method_id: body.paymentMethodId,
      issuer_id: body.issuerId,
      payer: {
        email: payer.email,
        identification: {
          type: payer.identification.docType,
          number: payer.identification.docNumber,
        },
      },
    };
  
    payment
      .create({ body: paymentData })
      .then(function (data) {
        res.status(201).json({
          detail: data.status_detail,
          status: data.status,
          id: data.id,
        });
      })
      .catch(function (error) {
        console.log(error);
        const { errorMessage, errorStatus } = validateError(error);
        res.status(errorStatus).json({ error_message: errorMessage });
      });
  });
  
  function validateError(error) {
    let errorMessage = "Unknown error cause";
    let errorStatus = 400;
  
    if (error.cause) {
      const sdkErrorMessage = error.cause[0].description;
      errorMessage = sdkErrorMessage || errorMessage;
  
      const sdkErrorStatus = error.status;
      errorStatus = sdkErrorStatus || errorStatus;
    }
  
    return { errorMessage, errorStatus };
  }

  module.exports = router;