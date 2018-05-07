const mongoose = require('mongoose');

let tourSchema = new mongoose.Schema({
	_id: Number,
	title: String,
	created_by: String, //Username
	comments: [
		{
			created_by: String, //Username
			comment: String,
			created_at: Date,
			likes: Number,
			dislikes: Number
		}
	],
	activities: [
		{
			_id: Number,
			price: String,
			duration: String,
			images: [String]
		}
	],
	landmarks: [
		{
			_id: Number,
			images: [String]
		}
	],
	price: String,
	duration: String,
	likes: Number,
	dislikes: Number,
	tags: [String]
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;