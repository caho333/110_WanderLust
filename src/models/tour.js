const mongoose = require('mongoose');

let tourSchema = new mongoose.Schema({
	title: String,
	created_by: String, //Username or Email
	comments: [
		{
		  comment_id: String,
			created_by: String, //Username or Email
			comment: String,
			created_at: Date,
			likes: Number,
			dislikes: Number,
      reply_to: String // Comment ID
		}
	],
	activities: [
		{
		  site_id: String,
			price: String,
			duration: String,
			images: [String]
		}
	],
	landmarks: [
		{
		  site_id: String,
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