const mongoose = require('mongoose');

const mailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mailsend: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    mailreceive: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String },
    content: { type: String, required: true },
    time: { type: Date },
    status: { type: Boolean },
    type: { type: String }
})

module.exports = mongoose.model('Mail', mailSchema)