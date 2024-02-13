module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios"
    let cols = {
        email: {
            type: dataTypes.TEXT
        },
      
        password: {
            type: dataTypes.TEXT
        }

    };
    let config = {
        tableName: "MSusuarios",
        timestamps: false        
    };

    const Usuarios = sequelize.define(alias, cols, config);


    return Usuarios;
};
