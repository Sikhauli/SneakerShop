const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    brand: {
        type: String,
        trim: true,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        trim: true,
        required: [true, "Model is required"]
    },
    category: {
        type: String,
        trim: true,
        required: [true, "Category is required"],
        enum: {
            values: ["Men", "Women", "Kids"],
            message: "{VALUE} is an invalid category"
        }
    },
    size: {
        type: [Number],
        required: [true, "Size is required"]
    },
    label: {
        type: String,
        trim: true,
        required: [true, "Label is required"],
        enum: {
            values: ["Coming Soon", "Exclusive", "Last Pairs", "New in"],
            message: "{VALUE} is an invalid label"
        }
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    colors: {
        type: [{
            name: {
                type: String,
                trim: true,
                required: [true, "Color name is required"]
            },
            quantity: {
                type: Number,
                required: [true, "Quantity is required"]
            }
        }],
        validate: {
            validator: function (value) {
                return value.length > 0;
            },
            message: "At least one color is required"
        }
    },
    releaseDate: {
        type: Date,
        required: [true, "Release date is required"]
    },
    images: {
        type: [String],
        required: [true, "Images are required"]
    }
});

module.exports = mongoose.model('Sneaker', sneakerSchema);
