const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
const app = express();

mongoose.connect('mongodb://localhost:27017/productSDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});