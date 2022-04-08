const { model, Schema } = require('mongoose');

const deliveryAddressSchema = Schema({

    name: {
        type: String,
        required: [true, 'Address name is required'],
        maxlength: [255, 'Address name maximum 255 characters'] 
    },

    street: {
        type: String,
        required: [true, 'Street name is required'],
        maxlength: [255, 'Street name maximum 255 characters']
    },

    district: {
        type: String,
        required: [true, 'District name is required'],
        maxlength: [255, 'District name maximum 255 characters']
    },

    province: {
        type: String,
        required: [true, 'Province name is required'],
        maxlength: [255, 'Province name maximum 255 characters']
    },

    city: {
        type: String,
        required: [true, 'City name is required'],
        maxlength: [255, 'City name maximum 255 characters']
    },

    postal_code : {
        type: Number,
        required: [true, 'Postal code is required'],
        maxlength: [10, 'Postal code maximum 10 characters']
    },

    address_note : {
        type: String,
        maxlength: [255, 'Note maximum 10 characters']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
}, {timestamps: true});

module.exports = model('DeliveryAddress', deliveryAddressSchema);