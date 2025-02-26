const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    farm: { type: mongoose.Schema.Types.ObjectId, ref: 'Farm' }
});

module.exports = mongoose.model('Product', productSchema);