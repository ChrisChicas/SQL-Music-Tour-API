'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "events",
      "date",
      {
        type: DataTypes.DATE,
        allowNull: false
      }
      )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "events",
      "date"
      )
  }
};
