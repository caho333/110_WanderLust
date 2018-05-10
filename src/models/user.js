const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	permission: Number,
	username: String,
	email: String,
	created_tours: [Number], // TOUR_ID
	saved_tours: [Number], // TOUR_ID
	profile: String,
	comment_likes: Number,
	tour_likes: Number,
	preferences: [String]
});

const User = mongoose.model('User', userSchema);
module.exports = User;