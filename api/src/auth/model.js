const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    userType: {
        type: String,
        trim: true,
        uppercase: true,
        enum: {
            values: ["ADMIN", "CUSTOMER"],
            message: "{VALUE} is an invalid label"
        },
        default: "CUSTOMER", 
        set: function (value) {
            return value || "CUSTOMER";
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
