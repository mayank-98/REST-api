const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    images: {
        type: Array,
        default: 'https://www.thesprucepets.com/thmb/ellNGaGHHvJ3DUC_Sv5CiRteGkg=/3504x1971/smart/filters:no_upscale()/Pomeranian-GettyImages-1014940472-a6ba0030958a4bbba0eee3e982ee9bc6.jpg'
    },
    description: String,
    content: String,
    colors: Array,
    sizes: Array,
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Products', productSchema)