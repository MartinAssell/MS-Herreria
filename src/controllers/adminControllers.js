const path = require("path");
const adminControllers = {
    home: (req, res) =>{
        res.render(path.join(__dirname,"../views/admin"))
    }
}

module.exports = adminControllers;