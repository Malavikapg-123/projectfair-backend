// creating router: define path to resolve various request

const userController = require('../Controllers/userController');
const projectController = require('../Controllers/projectController');
const jwtMiddleware = require('../Middlewares/jwtMiddleware');
const multerConfig = require('../Middlewares/multerMiddleware')

// 1) import express
const express = require('express');

// 2) create an object for the class Router in Express
const router = new express.Router();

// 3) define paths for resolving request
// A) user registration   
router.post('/user/register', userController.register)

// B) user login
router.post('/user/login', userController.login)

// C) add project
router.post('/project/add', jwtMiddleware, multerConfig.single('projectImage'), projectController.addProject)

// D) get home project
router.get('/project/home-project', projectController.getHomeProjects)

// E) get all project
router.get('/project/all-project', jwtMiddleware, projectController.getAllProjects)

// F) get user project
router.get('/project/user-project', jwtMiddleware, projectController.getUserProjects)

// G) edit user project
router.put('/project/edit/:id', jwtMiddleware, multerConfig.single('projectImage'), projectController.editUserProject)

// H) delete user project
router.delete('/project/remove/:id',jwtMiddleware,projectController.deleteUserProject)

// 4) export router
module.exports = router;