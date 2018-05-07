// Site Model Instantiation --> Creates site collection in Jaunt Database
const mongoose = require('mongoose');

let siteSchema = new mongoose.Schema({
	_id: Number,
	name: String,
	location: String,
	hours: String,
	description: String,
	images: [String],
	type: String // Activity or Landmark
});

const Site = mongoose.model('Site', siteSchema);
module.exports = Site;