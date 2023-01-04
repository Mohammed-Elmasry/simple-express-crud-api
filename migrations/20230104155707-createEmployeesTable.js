'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.createTable("employees", {
            id: {type: Sequelize.DataTypes.BIGINT, allowNull: false, primaryKey: true},
            first_name: {type: Sequelize.DataTypes.STRING, allowNull: false},
            last_name: {type: Sequelize.DataTypes.STRING, allowNull: false},
            email: {type: Sequelize.DataTypes.STRING, allowNull: false, unique: true}
        });

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.dropTable("employees");
    }
};
