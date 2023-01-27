const sequelize = require("../config/connection");
const seedUsers = require("./SeedUsers");
//const seedWaterConsumption = require("./SeedWaterConsumption");
const seedForumPosts = require("./SeedForumPosts");
const seedComments = require("./SeedComments");

const seedData = async () => {
    console.log("\n----Syncing Database----\n");
    await sequelize.sync({ force: true });

    console.log("\n----Seeding Users----\n");
    await seedUsers();

    console.log("\n----Seeding Forum Posts!----\n");
    await seedForumPosts();

    console.log("\n----Seeding Forum Comments!----\n");
    await seedComments();

    //console.log("\n----Seeding Water Consumption!----\n");
    //await seedWaterConsumption();

    process.kill(0);
};

seedData();
