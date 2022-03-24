const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const invoiceSchema = Schema({

    sub_total: {
        type: Number,
        required: [ true, 'Sub total must be filled' ]
    },

    delivery_fee: {
        type: Number,
        required: [ true, 'Delivery fee must be filled' ]
    },

    delivery_address: {
        city: {type: String, required: [ true, 'City must be filled' ]},
        province: {type: String, required: [ true, 'Province must be filled' ]},
        district: {type: String, required: [ true, 'District must be filled' ]},
        street: {type: String, required: [ true, 'Street must be filled' ]},
        postal_code: {type: String, required: [ true, 'Postal code must be filled' ]},
        address_note: { type: String },
    },

    total: {
        type: Number,
        required: [ true, 'Total must be filled' ]
    },

    payment_status: {
        type: String,
        enum: [ 'waiting_payment', 'paid' ],
        default: 'waiting_payment'
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }

}, {timestamps: true});


module.exports = model('Invoice', invoiceSchema);