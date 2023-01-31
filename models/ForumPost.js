const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ForumPost extends Model {}

ForumPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vote_total: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    },
    {
        sequelize,
        updatedAt: false,
        createdAt: "timestamp",
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "forum_post",
    }
);

module.exports = ForumPost;
