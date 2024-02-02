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
    },
    {
      timestamps: true,
      //   tableName: "Accesses",
    }
  );
};
