var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
	name: String,
	image_url: String,
	description: String,
	quantity: Number

})

mongoose.model('Product', ProductSchema);