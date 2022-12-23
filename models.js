"use strict";

import {Sequelize, DataTypes} from "sequelize";

const connectionOptions = {
    database: "employees",
    username: "root",
    password: "password",
    host: "0.0.0.0",
    dialect: "mysql"
}

const sequelize = new Sequelize(connectionOptions)

sequelize.define('Employee', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


const Employee = sequelize.models.Employee;

export {Employee};