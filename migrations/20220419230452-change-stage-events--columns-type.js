'use strict';

const {DataTypes} = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      "stageevents",
      "stage_id",
      {
        type: DataTypes.SMALLINT,
      }
    )
    await queryInterface.changeColumn(
      "stageevents",
      "event_id",
      {
        type: DataTypes.SMALLINT
      }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      "stageevents",
      "stage_id",
      {
        type: DataTypes.INTEGER
      }
    )
    await queryInterface.changeColumn(
      "stageevents",
      "event_id",
      {
        type: DataTypes.INTEGER
      }
    )
  }
};
