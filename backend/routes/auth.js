const express = require('express');
const auth = express.Router();
const {body, validationResult} = require('express-validator');
const Users = require('../models/User');
const { register, login, getUserDetails } = require('../controllers/userController')
const fetchuser = require('../middleware/fetchuser')

//create a user
auth.post('/register', [
    body('name','Enter a valid name').isLength({ min:3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Enter a valid password').isLength({ min:5 })
 ] , register);

//login a user
auth.post('/login',[
    body('email','Email or Password is incorrect'),
    body('password','Password cannot be empty').exists()
],login);

//get a user's info
auth.post('/getUserDetails',fetchuser,getUserDetails);

module.exports = auth;