const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	_id: Number,
	permission: Number,
	username: String,
	email: String,
	created_tours: [Number], // TOUR_ID
	saved_tours: [Number], // TOUR_ID
	profile: String,
	comment_likes: Number,
	tour_likes: Number
});

const User = mongoose.model('User', userSchema);
module.exports = User;