const sequelize = require("../config/connection");
const { User } = require("../models");

const seedUsers = async () => {
    await User.bulkCreate([
        {
            id: 1,
            username: "Liam Smith",
            hashed_password: "$2b$10$oKrcsjSzHd7VOUS9cSFJK.F8U66EMXWJQmgCVuSOD/G35t4aQ7rXy",
            //password1
            email: "Lsmith@gmail.com",
        },
        {
            id: 2,
            username: "Noah Roberts",
            hashed_password: "$2b$10$Q/zM2zmZDhUP64skhP95t.SQLwnB9OqhL9Bf6IDoAw/4/ectA6cie",
            //password2
            email: "nRoberts@gmail.com",
        },
        {
            id: 3,
            username: "Oliver Williams",
            hashed_password: "$2b$10$pNnaZIq8XD5yjdT0.GD/qOlFWv28/PSd2iiCEorFAlUCtUr4BNDZC",
            //password3
            email: "testemail1@gmail.com",
        },
        {
            id: 4,
            username: "Emma Brown",
            hashed_password: "$2b$10$DKLqr6AOINcKFoZ2nAZ7nexFkqTsFclTHaZpfROTvYu22bm2.8MtS",
            //password4
            email: "Emma@gmail.com",
        },
        {
            id: 5,
            username: "Ashley Smith",
            hashed_password: "$2b$10$VppvxQSiNO22igHskAWCi.Q.6XMfGIUrXf63lwp2zCG8CJfrp.poG",
            //password5
            email: "AshleySmith@gmail.com",
        },
    ]);
};

module.exports = seedUsers;
