const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];

  const { limit = 10 } = req.query;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('from filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id: id,
    name: 'Product ' + id,
    price: 1000,
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send('product created');
});
module.exports = router;
