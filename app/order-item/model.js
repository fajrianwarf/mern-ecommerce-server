const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const orderItemSchema = Schema({

    name: {
        type: String,
        minlength: [ 5, 'Name length min 5 characters ' ],
        required: [ true, 'Name is required']
    },

    price: {
        type: Number,
        required: [ true, 'Price is required' ]
    },

    qty: {
        type: Number,
        required: [ true, 'Qty is required' ],
        min: [ 1, 'At least there\'s 1 qty' ]
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);