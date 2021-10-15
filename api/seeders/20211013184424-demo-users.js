"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "Users",
            [
                {
                    name: "John Doe",
                    email: "john@john.com",
                    password: "123456",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Daniel Noinha",
                    email: "noinha@noinha.com",
                    password: "654321",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Gabriele Costa",
                    email: "gabi@gabi.com",
                    password: "gabigatinha",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Diego Costa",
                    email: "diego@diego.com",
                    password: "diego02",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Fabricio Costa",
                    email: "fabricio@fabricio.com",
                    password: "gabigatinha",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Camilo Costa",
                    email: "camilo@camilo.com",
                    password: "camilo21",
                    type: "student",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Erson Camilo",
                    email: "erson@erson.com",
                    password: "erson1",
                    type: "instructor",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Gabriel Oliver",
                    email: "gabriel@gabriel.com",
                    password: "852369",
                    type: "instructor",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Bruno Melao",
                    email: "bruno@bruno.com",
                    password: "874369",
                    type: "instructor",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("People", null, {});
    },
};
