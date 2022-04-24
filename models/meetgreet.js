'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Event}) {
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "bands"
      })

      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "events"
      })
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    start_time: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE, 
      allowNull: false
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MeetGreet',
    tableName: 'meetgreets',
    timestamps: false
  });
  return MeetGreet;
};