const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class WaterConsumption extends Model {}

WaterConsumption.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            references: {
                model: "user",
                key: "id",
            },
        },
        target_daily_consumption: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount_consumed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
        {
        sequelize,
        updatedAt: false,
        createdAt: "timestamp",
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "water_consumption",
        }
    );
    
module.exports = WaterConsumption;
