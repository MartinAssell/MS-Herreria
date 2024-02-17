const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const methodoverride = require("method-override");
const morgan = require("morgan");
const dotenv=require("dotenv").config();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const homeRoutes = require("./src/routes/homeRoutes");
const galleryRoutes = require('./src/routes/galleryRoutes');
const contactRoutes = require("./src/routes/contactRoutes");
const adminRoutes= require ('./src/routes/adminRoutes')

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodoverride("_method"));
app.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto ${PORT}`)
);


app.use("/", homeRoutes);
app.use( galleryRoutes); // Agrega el prefijo "/gallery" para las rutas de galería
app.use(contactRoutes);
app.use(adminRoutes);
