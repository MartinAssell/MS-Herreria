const path = require("path");
const contactController = {
    home: (req, res) =>{
        res.render(path.join(__dirname,"../views/contact"))
    }
}

module.exports = contactController;