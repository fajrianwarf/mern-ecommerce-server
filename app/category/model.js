const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let categorySchema = Schema({
    name: {
        type: String,
        minlength: [ 3, 'min length at least 3 characters' ],
        maxlength: [ 20, 'length is maximum 20 characters' ],
        required: [ true, 'Category name is required' ]
    }
});

module.exports = model('Category', categorySchema);