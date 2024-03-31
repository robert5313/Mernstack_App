const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Admin = require('../Models/admin_model');

//Get admins available
router.route('/').get(async (req, res) => {
    try {
        const admins = await Admin.find();
        res.json(admins);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Get admin by id
router.route('/:id').get(async (req, res) => {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(admin);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Create admin
router.route('/').post(async (req, res) => {
    try {
        if (!req.body.email) {
            return res.status(400).send({ message: "Email is invalid" });
        }
        if (!req.body.password) {
            return res.status(400).send({ message: "Password is invalid" });
        }
        if (!req.body.role) {
            return res.status(400).send({ message: "Role is invalid" });
        }
        if (!req.body.name) {
            return res.status(400).send({ message: "Name is invalid" });
        }
        if (!req.body.phone) {
            return res.status(400).send({ message: "Phone is invalid" });
        }
        if (!req.body.Id_number) {
            return res.status(400).send({ message: "Id_number is invalid" });
        }
        
        const admin = new Admin(req.body);
        const result = await admin.save();
        res.json(result);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ Error:  error.message });
    }
});

// Update admin
router.route('/:id').put(async (req, res) => {
    try {
        const admin = await Admin.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json(admin);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Delete admin

router.route('/:id').delete(async (req, res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        res.json({ message: "Admin deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;