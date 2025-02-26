const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
    name: String,
    location: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

// Middleware: Delete associated products when a farm is deleted
farmSchema.pre('findOneAndDelete', async function (next) {
    const farm = await this.model.findOne(this.getFilter());
    if (farm) {
        await mongoose.model('Product').deleteMany({ _id: { $in: farm.products } });
    }
    next();
});

module.exports = mongoose.model('Farm', farmSchema);