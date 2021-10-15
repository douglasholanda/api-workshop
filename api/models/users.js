"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        static associate(models) {
            Users.hasMany(models.Schedules, {
                foreignKey: "instructorId",
            });
            Users.hasMany(models.Themes, {
                foreignKey: "userId",
            });
            Users.hasMany(models.Interests, {
                foreignKey: "userId",
            });
        }
    }
    Users.init(
        {
            name: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "Please enter a valid email",
                    },
                },
            },
            password: DataTypes.STRING,
            type: DataTypes.ENUM("student", "instructor"),
            userscol: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Users",
        }
    );
    return Users;
};
