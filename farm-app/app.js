const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Farm = require('./models/farm');
const Product = require('./models/product');

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // Ensure views directory is set correctly
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/farmApp')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Route: Show all farms
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

// Route: Create new farm (Form)
app.get('/farms/new', (req, res) => {
    res.render('farms/new');
});

// Route: Add a new farm
app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
});

// Route: Show farm details (including products)
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
});

// Route: Add product to farm (Form)
app.get('/farms/:id/products/new', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    res.render('farms/newProduct', { farm });
});

// Route: Add a product to a farm
app.post('/farms/:id/products', async (req, res) => {
    const farm = await Farm.findById(req.params.id);
    const product = new Product(req.body);
    product.farm = farm;
    await product.save();
    farm.products.push(product);
    await farm.save();
    res.redirect(`/farms/${farm._id}`);
});

// Route: Delete a farm (triggers middleware to delete products)
app.delete('/farms/:id', async (req, res) => {
    await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});