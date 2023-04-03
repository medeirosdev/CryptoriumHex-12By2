"use strict";
const mongoose = require('../db/connMongoDB');
const { Schema } = mongoose;
const CodeModel = mongoose.model('CodeModel', new Schema({
    user_Id: {
        type: String,
        required: true,
    },
    coder: {
        type: String,
        required: true,
    }
}, { timestamps: true }));
module.exports = CodeModel;
