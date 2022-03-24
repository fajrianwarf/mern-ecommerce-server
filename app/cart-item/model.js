const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const cartItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'Name length minimum 5 characters'],
        required: [ true, 'Item name is required' ]
    },

    qty: {
        type: Number,
        required: [ true, 'Qty must be filled' ],
        min: [ 1, 'Minimum order is 1' ]
    },

    price: {
        type: Number,
        default: 0
    },

    img_url: String,

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
});

module.exports = model('CartItem', cartItemSchema);