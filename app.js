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
const editProductRoutes= require ('./src/routes/editProductRoutes')
const deleteProductRoutes=require('./src/routes/deleteProductRoutes')
const paymentRoutes = require('./src/routes/paymentRoutes');

app.use(express.static("public", { // Configurar para servir archivos estáticos
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) { // Si el archivo termina en .js
      res.set('Content-Type', 'application/javascript'); // Establecer tipo MIME a application/javascript
    }
  }
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.engine("html", require("hbs").__express);
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());

app.use(methodoverride("_method"));
app.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto ${PORT}`)
);


app.use("/", homeRoutes);
app.use( galleryRoutes);
app.use(contactRoutes);
app.use(adminRoutes);
app.use(editProductRoutes)
app.use(deleteProductRoutes)
app.use (paymentRoutes)