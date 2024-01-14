"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // ket noi model
    static associate(models) {
      // define association here
      Course.belongsToMany(models.User, {
        through: "user_courses",
        foreignKey: "course_id",
        as: "users",
      });
    }
  }
  Course.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Course",
      // timestamps: true,
      tableName: "courses",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Course;
};
