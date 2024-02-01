const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const methodoverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const dotenv = require("dotenv").config();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(morgan('dev'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(methodoverride("_method"));

const homeRoutes = require("./src/routes/homeRoutes");
const galleryRoutes = require('./src/routes/galleryRoutes');
const contactRoutes = require("./src/routes/contactRoutes");

app.listen(PORT, () =>
  console.log(`Servidor escuchando en puerto ${PORT}`)
);

app.use("/", homeRoutes);
app.use(galleryRoutes);
app.use(contactRoutes);