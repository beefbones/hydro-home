const sequelize = require("../config/connection");
const { WaterConsumption } = require("../models");

const seedWaterConsumption = async () => {
    await WaterConsumption.bulkCreate([
        { id: 1, user_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 2, user_id: 1, timestamp: new Date(2023, 0, 24, 13, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 3, user_id: 1, timestamp: new Date(2023, 0, 24, 14, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 4, user_id: 2, timestamp: new Date(2023, 0, 22, 8, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 5, user_id: 2, timestamp: new Date(2023, 0, 23, 12, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 6, user_id: 2, timestamp: new Date(2023, 0, 24, 8, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 7, user_id: 2, timestamp: new Date(2023, 0, 18, 17, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 8, user_id: 3, timestamp: new Date(2023, 0, 19, 20, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 9, user_id: 4, timestamp: new Date(2023, 0, 23, 12, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
        { id: 10, user_id: 5, timestamp: new Date(2023, 0, 24, 17, 1, 1), target_daily_consumption: 64, amount_consumed: 8 },
    ]);
};

module.exports = seedWaterConsumption;
