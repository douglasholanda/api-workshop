"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Themes extends Model {
        static associate(models) {
            Themes.belongsTo(models.Users, {
                foreignKey: "userId",
            });
            Themes.hasMany(models.Schedules_Themes, {
                foreignKey: "themeId",
            });
            Themes.hasMany(models.Interests, {
                foreignKey: "themeId",
            });
        }
    }
    Themes.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Themes",
        }
    );
    return Themes;
};
