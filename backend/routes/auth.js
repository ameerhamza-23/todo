const express = require('express');
const auth = express.Router();
const Users = require('../models/User');
const { register, login, getUserDetails } = require('../controllers/userController')

auth.post('/register', register);
auth.post('/login',login);
auth.post('/getUserDetails',getUserDetails);

module.exports = auth