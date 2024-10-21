const Dp = require('../model/DpModel');

// GET: Fetch dp info
exports.getDp = async (req, res) => {
    try {
        const dp = await Dp.findOne();
        if (dp) {
            res.status(200).json(dp); // Return the dp if found
        } else {
            res.status(404).json({ message: 'Dp section not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// POST: Create or update dp info
exports.createOrUpdateDp = async (req, res) => {
    try {
        const dpData = req.body;
        let dp = await Dp.findOne();

        if (dp) {
            // Update existing document
            dp = await Dp.findByIdAndUpdate(dp._id, dpData, { new: true });
            res.status(200).json(dp); // Use 200 for updates
        } else {
            // Create new document
            dp = new Dp(dpData);
            await dp.save(); // Correctly save the dp document
            res.status(201).json(dp); // Use 201 for creation
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
