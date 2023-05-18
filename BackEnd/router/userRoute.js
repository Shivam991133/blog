const { signUp, login } = require('../controller/userController');

const Router = require('express').Router();





Router.post('/signUp',signUp);
Router.post('/login',login);



module.exports  = Router;