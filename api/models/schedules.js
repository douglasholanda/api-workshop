"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Schedules extends Model {
        static associate(models) {
            Schedules.belongsTo(models.Users, {
                foreignKey: "instructor_id",
            });
            Schedules.hasMany(models.Schedules_Themes, {
                foreignKey: "scheduleId",
            });
        }
    }
    Schedules.init(
        {
            title: DataTypes.STRING,
            description: DataTypes.STRING,
            date: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: "Schedules",
        }
    );
    return Schedules;
};
