const Users = require('../models/User');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "todoAPPwithBackend"

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const secPas = await bcrypt.hash(password, salt);
    const user = await Users.findOne({ email: req.body.email });
    if (user) {
        res.status(400).json({ err: "a user with this email already exists" });
        return;
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })
    }
    else {
        try {
            const user = await Users.create({ name, email, password: secPas })
            const data = {
                user: {
                    id: user._id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.json({ authToken })
        }
        catch (err) {
            res.status(500).json({ error: "An error occured while registering", msg: err.message });
        }
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })
    }
    try {
        const user = await Users.findOne({ email });
        console.log('email',email,'\n','password',password)
        if (!user) {
            return res.status(400).json({ error: "Email or Password is incorrect" })
        }
        const passCompare = await bcrypt.compare(password,user.password);
        if(!passCompare) {
            return res.status(400).json({error:"Email or Password is incorrect"});
        }
        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken })
    }
    catch(err) {
        return res.status(500).json({error:"An error occured while loggin in", msg:err.message});
    }

}

const getUserDetails = async (req, res) => {
    const userid = req.user.id;
    try {
        const user = await Users.findById(userid).select('-password');
        res.json(user);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({error:err.message})
    }
}

module.exports = { register, login, getUserDetails }