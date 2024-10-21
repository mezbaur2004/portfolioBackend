const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Dp = mongoose.model('Dp', aboutSchema);
module.exports = Dp;