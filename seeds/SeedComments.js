const sequelize = require("../config/connection");
const { Comment } = require("../models");

const seedComments = async () => {
    await Comment.bulkCreate([
        { id: 1, content: "TestContent1", user_id: 1, post_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        { id: 2, content: "TestContent2", user_id: 2, post_id: 1, timestamp: new Date(2023, 0, 24, 13, 2, 2) },
        { id: 3, content: "TestContent3", user_id: 3, post_id: 1, timestamp: new Date(2023, 0, 24, 14, 3, 3) },
        { id: 4, content: "TestContent4", user_id: 4, post_id: 2, timestamp: new Date(2023, 0, 24, 15, 4, 4) },
        { id: 5, content: "TestContent5", user_id: 5, post_id: 2, timestamp: new Date(2023, 0, 24, 16, 5, 5) },
        { id: 6, content: "TestContent6", user_id: 5, post_id: 1, timestamp: new Date(2023, 0, 24, 17, 6, 6) },
        { id: 7, content: "TestContent7", user_id: 4, post_id: 5, timestamp: new Date(2023, 0, 24, 18, 1, 1) },
        { id: 8, content: "TestContent8", user_id: 3, post_id: 7, timestamp: new Date(2023, 0, 24, 19, 2, 2) },
        { id: 9, content: "TestContent9", user_id: 2, post_id: 8, timestamp: new Date(2023, 0, 24, 20, 3, 3) },
        { id: 10, content: "TestContent10", user_id: 2, post_id: 6, timestamp: new Date(2023, 0, 24, 21, 4, 4) },
    ]);
};

module.exports = seedComments;
