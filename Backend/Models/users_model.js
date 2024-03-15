const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is required']
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required']
    },
    Id_number: {
        type: Number,
        unique: true,
        required: [true, 'Id_number is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'instructor'],
        required: [true, 'Role is required']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
// Hash the password before saving
userSchema.pre('save', async function(next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
};
module.exports = mongoose.model('User', userSchema);