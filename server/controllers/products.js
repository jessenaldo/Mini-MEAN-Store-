var mongoose = require('mongoose');
Product = mongoose.model('Product');

module.exports = (function() {
	return {
		index: function(req, res) {

			Product.find({}, function(err, results) {
				if(err) {
					console.log(err) 
				} else {
					res.json(results);
				}
			})
		},
		create: function(req, res) {
			product = new Product({name: req.body.name, image_url: req.body.image_url, description: req.body.description, quantity: req.body.quantity});

			product.save(function(err) {
				if(err) {
					console.log(err);
				} else {
					res.json(product);
				}
			})
		}
	}
})()