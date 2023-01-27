const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            references: {
                model: "user",
                key: "id",
            },
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            references: {
                model: "forum_post",
                key: "id",
            },
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
        modelName: "comment",
        }
    );
    
module.exports = Comment;
