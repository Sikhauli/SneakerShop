// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./model');
const { createToken, sendCookie, routeErrors } = require('../util/helpers');
const { USERS } = require("../util/const");


const register = async (req, res) => {
    try {
        const { email, password, name, userType } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Save user to database
        const newUser = await User.create({ name, email, userType, password: hashedPassword });
        const userData = await User.findById(newUser._id).select('-password');

        // Generate JWT token
        const token = createToken(newUser, newUser.userType);

        // Set token in cookies
        sendCookie(res, token);

        // Send response with token
        res.json({ token, user: userData });
    } catch (error) {
        console.error(error);
        routeErrors(res, error, 'Internal server error');
    }
};


// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        const userData = await User.findById(user._id).select('-password');
        // Generate JWT token
        const token = createToken(user, user.userType);

        // Set token in cookies
        sendCookie(res, token);

        // Send response with token
        res.json({ token, user: userData });

    } catch (error) {
        console.error(error);
        routeErrors(res, error, 'Internal server error');
    }
};

// Update user
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const authenticateUser = async (req, res) => {
    try {
        const { TAST } = req.cookies;
        if (!TAST) return res.status(401).send("Session expired!");
        // Verify token
        jwt.verify(TAST, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(402).send("Access Denied!");
            }
            if (
                decoded.type !== USERS.ADMIN &&
                decoded.type !== USERS.USER
            ) {
                return res.status(403).send("Access denied.");
            }
            req.user = decoded;
            // Retrieve user data from the database
            const user = await User.findById(req.user?._id);
            if (!user) return res.status(402).send("Access Denied!");

            // Remove sensitive information like password before sending response
            const { password, ...others } = user._doc;

            res.send({ ...others });
        });
    } catch (error) {
        routeErrors(res, error, "User authentication failed!");
    }
};

// Logout user 
const logout = async (req, res) => {
    try {
        // Destroy session on logout
        req.session.destroy();
        res.send("Logged out.");
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { register, login, update, authenticateUser, logout };
