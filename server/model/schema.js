const mongoose = require("mongoose");

const uploaderSchema = new mongoose.Schema({
    filename: {
        type:String,
        unique: true,
        required: true
    },
    contentType: {
        type: String,
        required: true
    },
    imageBase64: {
        type: String,
        required: true
    }
})

const uploadModel = mongoose.model('uploads', uploaderSchema);
module.exports = uploadModel;