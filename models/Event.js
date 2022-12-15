const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {} 

Event.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number_of_participants: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        max_participants: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        time_and_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        participants:{
            type: DataTypes.JSON,
            defaultValue: [],
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
              },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'event',
    }
);

module.exports = Event;


// ask if we need to include foreign keys