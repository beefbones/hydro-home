const sequelize = require("../config/connection");
const { ForumPost } = require("../models");

const seedForumPosts = async () => {
    await ForumPost.bulkCreate([
        { id: 1, title: "Water is the best", content: "TestContent1", user_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        { id: 2, title: "Dasani is actually terrible", content: "TestContent2", user_id: 2, timestamp: new Date(2023, 0, 24, 13, 2, 2) },
        { id: 3, title: "Can anyone actually afford Fiji???", content: "TestContent3", user_id: 3, timestamp: new Date(2023, 0, 24, 14, 3, 3) },
        { id: 4, title: "TestTitle 4", content: "TestContent4", user_id: 4, timestamp: new Date(2023, 0, 24, 15, 4, 4) },
        { id: 5, title: "TestTitle 5", content: "TestContent5", user_id: 5, timestamp: new Date(2023, 0, 24, 16, 5, 5) },
        { id: 6, title: "TestTitle 6", content: "TestContent6", user_id: 5, timestamp: new Date(2023, 0, 24, 17, 6, 6) },
        { id: 7, title: "TestTitle 7", content: "TestContent7", user_id: 4, timestamp: new Date(2023, 0, 24, 18, 1, 1) },
        { id: 8, title: "TestTitle 8", content: "TestContent8", user_id: 3, timestamp: new Date(2023, 0, 24, 19, 2, 2) },
        { id: 9, title: "TestTitle 9", content: "TestContent9", user_id: 2, timestamp: new Date(2023, 0, 24, 20, 3, 3) },
        { id: 10, title: "TestTitle 10", content: "TestContent10", user_id: 2, timestamp: new Date(2023, 0, 24, 21, 4, 4) },
    ]);
};

module.exports = seedForumPosts;
