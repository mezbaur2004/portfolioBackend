const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');

// POST: Login user
exports.loginUser = async (req, res) => {
    try {
        const { password } = req.body;
        const user = await User.findOne({});

        // Check if the password matches
        if (!user || password !== user.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate a token if the password is correct
        const token = jwt.sign({ userId: 'static-admin-id' }, 'myJWTKeyLoL', { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
