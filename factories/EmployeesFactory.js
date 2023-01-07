const {faker} = require("@faker-js/faker");
const db = require("../models/index");

const EmployeeModel = db.Employee;

function generateEmployee() {
    const gender = faker.name.sexType();
    const first_name = faker.name.firstName(gender);
    const last_name = faker.name.lastName();
    const email = faker.internet.email(first_name, last_name);

    return EmployeeModel.build({
        first_name: first_name,
        last_name: last_name,
        email: email
    });
}

module.exports = generateEmployee;