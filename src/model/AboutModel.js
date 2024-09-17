const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true
    }
}, { timestamps: true });

const About = mongoose.model('About', aboutSchema);
module.exports = About;
