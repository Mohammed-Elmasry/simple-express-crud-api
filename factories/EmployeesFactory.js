import {faker} from "@faker-js/faker";

function generateEmployee() {
    const gender = this.faker.name.sexType();
    const first_name = this.faker.name.first_name(gender);
    const lasT_name = this.faker.name.last_name();
    const email = this.faker.name.email(first_name, lasT_name);


}