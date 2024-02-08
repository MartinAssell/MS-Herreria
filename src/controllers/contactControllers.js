const path = require("path");
const bodyParser = require('body-parser');
const express = require ('express')
const nodemailer = require('nodemailer');
const contactController = {
    home: (req, res) =>{
        res.render(path.join(__dirname,"../views/contact"))
    },
    processMessage: (req, res) => {
        const { name, message, phone, email } = req.body;
        console.log('Datos del formulario:', { name, message, phone, email });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });

        const mailOptions = {
            from: email,
            to: 'msherreriaindustrial@gmail.com',
            subject: 'Contacto Herreria',
            text: `Nombre: ${name}\nTeléfono: ${phone}\nEmail: ${email}\n\nMensaje:\n${message}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error(error);
            }
            console.log('Correo electrónico enviado:', info.response);
        });

        res.send('mensaje enviado exitosamente!');
        
    }


}

module.exports = contactController;