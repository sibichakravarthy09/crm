const User = require('../../model/schema/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Admin register
const adminRegister = async (req, res) => {
    try {
        const { username, password, firstName, lastName, phoneNumber } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "Admin already exists, please try another email" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, firstName, lastName, phoneNumber, role: 'admin' });
        await newUser.save();
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register admin', details: error.message });
    }
};

// User Registration
const register = async (req, res) => {
    try {
        const { username, password, firstName, lastName, phoneNumber } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ message: "User already exists, please try another email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword, firstName, lastName, phoneNumber });
        await newUser.save();
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user', details: error.message });
    }
};

// View All Users (Excluding Deleted)
const index = async (req, res) => {
    try {
        const users = await User.find({ deleted: false });
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users', details: error.message });
    }
};

// View Specific User by ID
const view = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user || user.deleted) return res.status(404).json({ message: "No data found." });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user', details: error.message });
    }
};

// Delete User by ID
const deleteData = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.role === 'admin') {
            return res.status(403).json({ message: 'Admin cannot be deleted' });
        }
        
        user.deleted = true;
        await user.save();
        res.status(200).json({ message: 'Record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete user', details: error.message });
    }
};

// Bulk Delete Users by IDs
const deleteMany = async (req, res) => {
    try {
        const updatedUsers = await User.updateMany(
            { _id: { $in: req.body.ids }, role: { $ne: 'admin' } },
            { deleted: true }
        );
        res.status(200).json({ message: "Users deleted successfully", updatedUsers });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete users', details: error.message });
    }
};

// Edit User Details
const edit = async (req, res) => {
    try {
        const { username, firstName, lastName, phoneNumber } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            username, firstName, lastName, phoneNumber
        }, { new: true });

        if (!updatedUser) return res.status(404).json({ message: "User not found" });
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update user', details: error.message });
    }
};

// Login User
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, deleted: false });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid username' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '100d' });
        res.status(200).json({ message: 'Login successful', token, user });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during login', details: error.message });
    }
};

module.exports = { adminRegister, register, index, view, deleteData, deleteMany, edit, login };
