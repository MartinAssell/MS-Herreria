module.exports = (sequelize, dataTypes) => {
    let alias = "Productos"
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_name: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT
        },
        image: {
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.FLOAT
        }, 
    };
    let config = {
        tableName: "MS-productos",
        timestamps: false        
    };

    const Productos = sequelize.define(alias, cols, config);

    

    return Productos;
};
