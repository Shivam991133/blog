const { getAllCategory, addNewCategory } = require('../controller/categoryController');
const verifyToken = require('../middleWare/auth');

const Router = require('express').Router();


Router.get('/getAllCategory',verifyToken,getAllCategory);
Router.post('/addNewCategory',verifyToken,addNewCategory);

module.exports = Router;