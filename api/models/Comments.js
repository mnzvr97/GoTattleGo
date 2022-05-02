const mongoose = require("mongoose")

const CommentsSchema = new mongoose.Schema({
    text: {
        type: String
    },

    
}, {timestamps: true})

module.exports = mongoose.model("newComment", CommentsSchema)