'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Group.init({
    name: DataTypes.TEXT,
    name2: DataTypes.TEXT,
    name3: DataTypes.TEXT,
    name4: DataTypes.TEXT,
    name5: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};