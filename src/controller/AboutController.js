const About = require('../model/AboutModel');

// GET: Fetch about info
exports.getAbout = async (req, res) => {
    try {
        const about = await About.findOne();
        if (about) {
            res.status(200).json(about);
        } else {
            res.status(404).json({ message: 'About section not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// POST: Create or update about info
exports.createOrUpdateAbout = async (req, res) => {
    try {
        const aboutData = req.body;
        let about = await About.findOne();

        if (about) {
            // Update existing document
            about = await About.findByIdAndUpdate(about._id, aboutData, { new: true });
            res.status(200).json(about); // Use 200 for updates
        } else {
            // Create new document
            about = new About(aboutData);
            await about.save();
            res.status(201).json(about); // Use 201 for creation
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
