const sequelize = require("../config/connection");
const { User } = require("../models");

const seedUsers = async () => {
    await User.bulkCreate([
        { id: 1, username: "testUser1", hashed_password: "password1231" },
        { id: 2, username: "testUser2", hashed_password: "password1232" },
        { id: 3, username: "testUser3", hashed_password: "password1233" },
        { id: 4, username: "testUser4", hashed_password: "password1234" },
        { id: 5, username: "testUser5", hashed_password: "password1235" },
    ]);
};

module.exports = seedUsers;
