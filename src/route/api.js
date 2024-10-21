const express = require('express');
const AboutController = require('../controller/AboutController');
const DpController = require('../controller/DpController');
const ProjectController = require('../controller/ProjectController');
const UserController = require('../controller/UserController');
const middleware = require('../middleware/AuthMiddleware');

const router = express.Router();

// About routes
router.get('/about', AboutController.getAbout);
router.put('/about', middleware, AboutController.createOrUpdateAbout);

//Photo routes
router.get('/dp', DpController.getDp);
router.put('/dp', middleware, DpController.createOrUpdateDp);

// Project routes
router.get('/projects', ProjectController.getAllProjects);
router.post('/projects', middleware, ProjectController.createProject);
router.put('/projects/:id', middleware, ProjectController.updateProject);
router.delete('/projects/:id', middleware, ProjectController.deleteProject);

// User routes
router.post('/login', UserController.loginUser);

module.exports = router;
