const {DataTypes} =require('sequelize')
const {db} = require('../database/config')

const User = db.define("users",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(30),
        allowNull: false,
        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      profileImgUrl: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: 'https://images.pexels.com/photos/935762/pexels-photo-935762.jpeg',
        },
        passwordChangedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field:'password_changed_at'
        },
        role: {
            type: DataTypes.ENUM('user','admin'),
            allowNull: false,
            defaultValue:'user',
        },
        status: {
            type: DataTypes.ENUM('active','inactive'),
            allowNull: false,
            defaultValue:'active'
        },
    })
    

module.exports = User