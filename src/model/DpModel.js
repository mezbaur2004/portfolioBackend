const mongoose = require('mongoose');

const dpSchema = new mongoose.Schema({
    dp: {
        type: String, // URL of the image
        required: true
    }
}, { timestamps: true });

const Dp = mongoose.model('Dp', dpSchema);
module.exports = Dp;
