const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    mail: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    daysLeft: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, 
  {
    timestamps: true,
    // tableName: "User",
  });

}
