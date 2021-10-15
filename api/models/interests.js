"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Interests extends Model {
        static associate(models) {
            Interests.belongsTo(models.Users, {
                foreignKey: "userId",
            });
            Interests.belongsTo(models.Themes, {
                foreignKey: "themeId",
            });
        }
    }
    Interests.init(
        {},
        {
            sequelize,
            modelName: "Interests",
        }
    );
    return Interests;
};
