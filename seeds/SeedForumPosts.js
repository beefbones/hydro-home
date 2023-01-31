const sequelize = require("../config/connection");
const { ForumPost } = require("../models");

const seedForumPosts = async () => {
    await ForumPost.bulkCreate([
        { id: 1, post_title: "Water is the best", content: "I love hydration", user_id: 1, timestamp: new Date(2023, 0, 24, 12, 1, 1) },
        {
            id: 2,
            post_title: "Dasani is actually terrible",
            content: "Coca cola company stinks :(",
            user_id: 2,
            timestamp: new Date(2023, 0, 24, 13, 2, 2),
        },
        {
            id: 3,
            post_title: "Can anyone actually afford Fiji???",
            content: "Water should be free",
            user_id: 3,
            timestamp: new Date(2023, 0, 24, 14, 3, 3),
        },
        { id: 4, post_title: "I actually enjoy tap water", content: "Please dont judge me", user_id: 4, timestamp: new Date(2023, 0, 24, 15, 4, 4) },
        { id: 5, post_title: "Water is good", content: "I like it", user_id: 5, timestamp: new Date(2023, 0, 24, 16, 5, 5) },
        {
            id: 6,
            post_title: "I just hit my hydration goal!!",
            content: "LETS GOOOOOOOO!!!!!!",
            user_id: 5,
            timestamp: new Date(2023, 0, 24, 17, 6, 6),
        },
        {
            id: 7,
            post_title: "I didn't hit my hydration goals :(",
            content: "(I will tomorrow)",
            user_id: 4,
            timestamp: new Date(2023, 0, 24, 18, 1, 1),
        },
        {
            id: 8,
            post_title: "Is it possible to drink too much water?",
            content: "Can too much of a good thing be a bad thing?",
            user_id: 3,
            timestamp: new Date(2023, 0, 24, 19, 2, 2),
        },
        { id: 9, post_title: "WATER", content: "I LIKE IT", user_id: 2, timestamp: new Date(2023, 0, 24, 20, 3, 3) },
        { id: 10, post_title: "I drink a gallon of water a day", content: "ama", user_id: 2, timestamp: new Date(2023, 0, 24, 21, 4, 4) },
    ]);
};

module.exports = seedForumPosts;