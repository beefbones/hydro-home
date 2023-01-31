const sequelize = require("../config/connection");
const { User } = require("../models");

const seedUsers = async () => {
    await User.bulkCreate([
        { id: 1, username: "Liam Smith", hashed_password: "password1231", email: "Lsmith@gmail.com" },
        { id: 2, username: "Noah Roberts", hashed_password: "password1232", email: "nRoberts@gmail.com" },
        { id: 3, username: "Oliver Williams", hashed_password: "password1233", email: "testemail1@gmail.com" },
        { id: 4, username: "Emma Brown", hashed_password: "password1234", email: "Emma@gmail.com" },
        { id: 5, username: "Ashley Smith", hashed_password: "password1235", email: "AshleySmith@gmail.com" },
    ]);
};

module.exports = seedUsers;