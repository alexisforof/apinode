const mongoose = require('mongoose');

// Récupération du Schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    "name": {
        type : String,
        required: true
    },
    "lastname": {
        type: String,
        required: true
    },
    "birth": {
        type: String,
        required: true
    },
    "passion": {
        type: String
    }
});

module.exports = user = mongoose.model("user", UserSchema);