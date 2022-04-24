'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      "meetgreets",
      "event_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
    await queryInterface.addColumn(
      "meetgreets",
      "band_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      "meetgreets",
      "event_id"
    )
    await queryInterface.removeColumn(
      "meetgreets",
      "band_id"
    )
  }
};
