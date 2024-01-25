const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Access",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      time: {
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    //   tableName: "Accesses",
    }
  );
};
