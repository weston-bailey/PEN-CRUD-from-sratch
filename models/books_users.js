'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  books_users.init({
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books_users',
  });
  return books_users;
};