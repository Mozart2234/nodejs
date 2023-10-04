const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

// app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world from my server');
});

app.get('/categories/:categoryId/products/:id', (req, res) => {
  const { categoryId, id } = req.params;

  res.json({
    id: id,
    categoryId: categoryId,
    name: 'Product ' + id,
    price: 1000,
  });
});

routerApi(app);

app.listen(port, () => {
  console.log('Server up in ' + port);
});
