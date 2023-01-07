'use strict';
const generateEmployee = require("../factories/EmployeesFactory");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        for (let i = 0; i < 10; i++) {
            await generateEmployee().save();
        }
    }
};
