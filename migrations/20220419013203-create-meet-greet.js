'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meetgreets', {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meetgreets');
  }
};