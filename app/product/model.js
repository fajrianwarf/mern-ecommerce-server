const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'products name at least have 3 characters'],
        required: [true, 'product name is required']
    },

    description: {
        type: String,
        maxlength: [1000, 'description must below 1000 characters']
    },

    price: {
        type: Number,
        default: 0
    },

    img_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    tags: {
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }

}, { timestamps: true });

module.exports = model('Product', productSchema);
