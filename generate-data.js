const faker = require("faker")

// Set locale to use Vietnamese
faker.locale = 'vi'

console.log(faker.commerce.productName());