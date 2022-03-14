const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let tagSchema = Schema({
    name: {
        type: String,
        minlength: [ 3, 'min length at least 3 characters' ],
        maxlength: [ 20, 'max length 20 characters' ],
        required: [ true, 'Tag\'s name is required' ]
    }
});

module.exports = model('Tag', tagSchema);