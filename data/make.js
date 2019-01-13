const faker = require('faker')
const fs = require('fs')

const products = [];
for (i=0; i<20;i++) {
    products.push({
        id: faker.random.uuid(),
        title: faker.commerce.productName(5),
        price: faker.commerce.price(20, 200),
        description: faker.lorem.sentences(2),
        department: faker.commerce.department(),
        image: faker.image.image(300, 300, true),
    })
}

const json = JSON.stringify({products}, true);
//console.log(products)
fs.writeFileSync("products.json", json);

