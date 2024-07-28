const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Notes = sequelize.define(
  "Notes",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "general",
    },
  },
  {
    tableName: "notes",
    timestamps: false,
  }
);

module.exports = Notes;
