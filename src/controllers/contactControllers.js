const path = require("path");
const contactController = {
    home: (req, res) =>{
        res.render(path.join(__dirname,"../views/contactUs"))
    }
}

module.exports = contactController;