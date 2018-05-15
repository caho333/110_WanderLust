const mongoose = require('mongoose');

let tourSchema = new mongoose.Schema({
	title: String,
	created_by: String, //Username
	comments: [
		{
			created_by: String, //Username
			comment: String,
			created_at: Date,
			likes: Number,
			dislikes: Number,
      reply_to: String
		}
	],
	activities: [
		{
			price: String,
			duration: String,
			images: [String]
		}
	],
	landmarks: [
		{
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