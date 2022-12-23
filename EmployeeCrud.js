"use strict";

import {Employee} from "./models.js";

// Employee.sync();

const options = {firstName: "Jason", lastName: "Todd"}

async function createEmployee(options = {}) {
    const employee = await Employee.create(options);
    if (!employee) {
        throw new Error("Could not create the employee object");
    }
}

async function deleteEmployee(employeeId) {
    const employee = await Employee.findOne({
        where: {id: employeeId}
    });

    if (employee) { // exists
        await employee.destroy();
    } else { // does not exist so throw exception
        throw new Error("Model not found exception");
    }
}

async function updateEmployee(id, options) {
    const employee = await Employee.findOne({where: {id: id}});

    if (!employee)
        throw new Error("Employee Not found Exception");

    await employee.update(options);
    await employee.save();

}

async function getEmployeeById(id) {
    return await Employee.findOne({where: {id: id}});
}

function getEmployeeData(id) {
    getEmployeeById(id).then(emp => {
        return emp;
    }).catch(err => {
        console.log("Error happened", err);
    });
}

export {getEmployeeData, getEmployeeById, deleteEmployee, createEmployee, updateEmployee};