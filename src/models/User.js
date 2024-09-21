const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,   // Define como entero
        allowNull: false,
        primaryKey: true,          // Definimos que es la clave primaria
        autoIncrement: true        // Usamos autoIncrement para simular SERIAL
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        unique:true
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    birthday:{
        type:DataTypes.STRING(100),
        allowNull:false
    }

});

module.exports = User;
