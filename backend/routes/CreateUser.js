const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/CreateUser', [
  body('name').notEmpty().withMessage("Name is required"),
  body('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
  body('password').notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
  body('location').notEmpty().withMessage("Location is required")
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bycrypt.genSalt(10);
    const saltedpass = await bycrypt.hash(req.body.password, salt);
    const { name, email, location } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password: saltedpass,
            location,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


router.post('/LoginUser', [
  body('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
  body('password').notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"), 
], async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    try {
        const user = await User.find({ email });
        if (user.length === 0) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const isMatch = await bycrypt.compare(password, user[0].password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }
        const data = {
            user: {
                id: user[0]._id,
            }
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET);
        res.json({ authToken, user: user[0] });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

});

module.exports = router;
