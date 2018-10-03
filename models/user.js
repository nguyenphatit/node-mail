const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    avatar: { type: String },
    birthday: { type: Date },
    email: { 
        type: String,
        required: true,
        unique: true,
        match:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    },
    password: { type: String, required: true },
    phone: { type: String },
    address: { type: String }
})

module.exports = mongoose.model('User', userSchema)