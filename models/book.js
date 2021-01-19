'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.book.belongsToMany(models.user, { through:'books_users' })
      models.book.belongsToMany(models.genre, { through:'books_genres' })
    }
  };
  book.init({
    title: DataTypes.STRING,
    author: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};