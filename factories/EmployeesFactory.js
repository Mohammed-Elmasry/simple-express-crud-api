const {faker} = require("@faker-js/faker");

function generateEmployee() {
    const gender = faker.name.sexType();
    const first_name = faker.name.firstName(gender);
    const last_name = faker.name.lastName();
    const email = faker.internet.email(first_name, last_name);
    return {
        first_name: first_name,
        last_name: last_name,
        email: email,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }
}

module.exports = generateEmployee;