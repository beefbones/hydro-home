const sequelize = require("../config/connection");
const { Comment } = require("../models");

const seedComments = async () => {
    await Comment.bulkCreate([
        { id: 1, content: "I agree!", user_id: 1, post_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        { id: 2, content: "Water is goated", user_id: 2, post_id: 1, timestamp: new Date(2023, 0, 24, 13, 2, 2) },
        { id: 3, content: "YUUUUUP", user_id: 3, post_id: 1, timestamp: new Date(2023, 0, 24, 14, 3, 3) },
        { id: 4, content: "Buy Voss", user_id: 4, post_id: 2, timestamp: new Date(2023, 0, 24, 15, 4, 4) },
        { id: 5, content: "Dasani is pretty rough", user_id: 5, post_id: 2, timestamp: new Date(2023, 0, 24, 16, 5, 5) },
        { id: 6, content: "Water is the best", user_id: 5, post_id: 1, timestamp: new Date(2023, 0, 24, 17, 6, 6) },
        { id: 7, content: "100%", user_id: 4, post_id: 5, timestamp: new Date(2023, 0, 24, 18, 1, 1) },
        { id: 8, content: "New day, new water", user_id: 3, post_id: 7, timestamp: new Date(2023, 0, 24, 19, 2, 2) },
        { id: 9, content: "ask a doctor", user_id: 2, post_id: 8, timestamp: new Date(2023, 0, 24, 20, 3, 3) },
        { id: 10, content: "LETS GOOO!!!", user_id: 2, post_id: 6, timestamp: new Date(2023, 0, 24, 21, 4, 4) },
    ]);
};

module.exports = seedComments;