const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the user model
const UserSchema = new Schema({
    // No need for fields except for password
    password: {
        type: String,
        required: true
    }
});

// Create the model from the schema
const User = mongoose.model('User', UserSchema);

module.exports = User;
