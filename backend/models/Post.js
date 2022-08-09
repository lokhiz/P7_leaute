const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    creator: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    likes: { type: Number, },
    dislikes: { type: Number, },
    usersLiked: { type: [String], },
    usersDisliked: { type: [String], },
});

module.exports = mongoose.model('Post', postSchema);