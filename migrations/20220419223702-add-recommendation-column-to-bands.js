'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "bands", 
      "recommendation",
      {
        type: DataTypes.STRING,
        allowNull: false
      }
      )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "bands",
      "recommendation"
      )
  }
};
