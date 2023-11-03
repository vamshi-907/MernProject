const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    ClientName: String,
    ClientNumber: Number,
    DOB: Date,
    Email: String,
    Address: String,
    Payment: Number
});

module.exports = mongoose.model('Client', ClientSchema);
