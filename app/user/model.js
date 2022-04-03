const mongoose = require('mongoose')
const { model, Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt');

let userSchema = Schema({
    full_name: {
        type: String,
        required: [true, 'name is required'],
        maxlength: [255, 'name must be around 3 to 255 characters'],
        minlength: [3, 'name must be around 3 to 255 characters']
    },

    customer_id: {
        type: Number
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        maxlength: [255, 'Email maximum length is 255 characters']
    },

    password: {
        type: String,
        required: [true, 'password is required'],
        maxlength: [255, 'password maximum length is 255 characters'],
        minlength: [6, 'password minimum 6 character']
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },

    token: [String]

}, { timestamps: true });



//validation email
userSchema.path('email').validate( function(value){
    const EMAIL_RE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EMAIL_RE.test(value);
}, attr => `${attr.value} must be a valid email`);


//validation email if the email is already registered
userSchema.path('email').validate( async function(value){
    try {
        const count = await this.model('User').count({email: value})
        return !count; //this code return false and will passed it to the callback function
    } catch (err) {
        throw(err);
    }
}, attr => `${attr.value} already registered`);


//hashing password
const HASH_ROUND = 10;
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, HASH_ROUND);
    next();
});


//Adding auto increment to customer_id
userSchema.plugin(AutoIncrement, {inc_field: 'customer_id'});


module.exports = model('User', userSchema);