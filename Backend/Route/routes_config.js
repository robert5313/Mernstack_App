const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const User = require('../Models/users_model');


//Read users
// Get all users
router.route('/').get(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Get user by id
router.route('/:id').get(async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Create user
router.route('/').post(async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Update user
router.route('/:id').put(async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body },
            { new: true });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Delete user
router.route('/:id').delete(async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json
        ({ message: `User ${user} deleted successfully` });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;