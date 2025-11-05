const Project = require('../model/ProjectModel');

// GET: Fetch all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ created_At: -1 });

        res.status(200).json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch projects. Server error.' });
    }
};

// POST: Add a new project
exports.createProject = async (req, res) => {
    try {
        const { title, description, link, gitHubLink, image } = req.body;

        // Validate that required fields are provided
        if (!title || !description || !link || !gitHubLink || !image) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, link, GitHub link, image).' });
        }

        const newProject = new Project({ title, description, link, gitHubLink, image });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create project. Server error.' });
    }
};

// PUT: Update a project by ID
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const projectData = req.body;

        const updatedProject = await Project.findByIdAndUpdate(id, projectData, { new: true });

        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        res.status(200).json(updatedProject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update project. Server error.' });
    }
};

// DELETE: Delete a project by ID
exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const project = await Project.findByIdAndDelete(id);

        if (!project) {
            return res.status(404).json({ message: 'Project not found.' });
        }

        res.status(200).json({ message: 'Project deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete project. Server error.' });
    }
};
