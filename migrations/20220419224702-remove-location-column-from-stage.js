'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "stages",
      "location"
      )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "stages",
      "loaction",
      {
        type: DataTypes.TEXT,
        allowNull: false
      }
      )
  }
};
