'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "settimes",
      "event_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
    await queryInterface.addColumn(
      "settimes",
      "stage_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
    await queryInterface.addColumn(
      "settimes",
      "band_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "settimes",
      "event_id"
    )
    await queryInterface.removeColumn(
      "settimes",
      "stage_id"
    )
    await queryInterface.removeColumn(
      "settimes",
      "band_id"
    )
  }
};
