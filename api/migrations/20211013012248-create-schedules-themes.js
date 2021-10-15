"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Schedules_Themes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            scheduleId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "Schedules", key: "id" },
            },
            themeId: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: "Themes", key: "id" },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("Schedules_Themes");
    },
};
