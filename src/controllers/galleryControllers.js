const path = require("path");
const galleryController = {
    home: (req, res) =>{
        res.render(path.join(__dirname,"../views/gallery"))
    }
}

module.exports = galleryController;