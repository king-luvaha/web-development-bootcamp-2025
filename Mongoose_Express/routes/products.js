const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Index Route (List all products)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.render("index", { products });
  } catch {
    res.redirect("/");
  }
});

// New Route (Form to add a new product)
router.get("/new", (req, res) => {
  res.render("new", { product: new Product() });
});

// Create Route (Add a new product to the database)
router.post("/", async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  try {
    const newProduct = await product.save();
    res.redirect(`products/${newProduct.id}`);
  } catch {
    res.render("new", {
      product,
      errorMessage: "Error creating product",
    });
  }
});

// Show Route (Show details about one product)
router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product == null) res.redirect("/");
  res.render("show", { product });
});

// Edit Route (Form to edit a product)
router.get("/:id/edit", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.render("edit", { product });
});

// Update Route (Update a product in the database)
router.post("/:id", async (req, res) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    await product.save();
    res.redirect(`/products/${product.id}`);
  } catch {
    if (product == null) res.redirect("/");
    res.render("edit", {
      product,
      errorMessage: "Error updating product",
    });
  }
});

// Delete Route (Delete a product from the database)
router.delete("/:id", async (req, res) => {
  let product;
  try {
    product = await Product.findById(req.params.id);
    await product.remove();
    res.redirect("/products");
  } catch {
    if (product == null) res.redirect("/");
    res.redirect(`/products/${product.id}`);
  }
});

module.exports = router;
