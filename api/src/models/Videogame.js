const { DataTypes } = require ('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4

    },
    nombre: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false

    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: false

    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false

    },
    fechaDeLanzamiento: {
      type: DataTypes.DATE,
      allowNull: false

    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false

    }
  });
};
