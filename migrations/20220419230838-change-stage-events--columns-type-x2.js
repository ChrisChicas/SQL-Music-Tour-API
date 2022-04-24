'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      "stageevents",
      "stage_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
    await queryInterface.changeColumn(
      "stageevents",
      "event_id",
      {
        type: DataTypes.SMALLINT,
        allowNull: false
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      "stageevents",
      "stage_id",
      {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    )
    await queryInterface.changeColumn(
      "stageevents",
      "event_id",
      {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    )
  }
};
