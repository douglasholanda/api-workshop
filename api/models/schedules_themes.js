"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Schedules_Themes extends Model {
        static associate(models) {
            Schedules_Themes.belongsTo(models.Schedules, {
                foreignKey: "scheduleId",
            });
            Schedules_Themes.belongsTo(models.Themes, {
                foreignKey: "themeId",
            });
        }
    }
    Schedules_Themes.init(
        {},
        {
            sequelize,
            modelName: "Schedules_Themes",
        }
    );
    return Schedules_Themes;
};
