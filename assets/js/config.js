(function(){
		
	config = {
		"callback": function(){ init();}, 
		"paths": {
			"jquery": [
				"http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min",
				"/assets/js/lib/5jquery.min"
			],
			"json2": [
				"http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.min",
				"/assets/js/lib/json2.min"
			],
			"underscore": [
				"http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min",
				"/assets/js/lib/underscore-min"
			],
			"handlebars": [
				"http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0.beta6/handlebars.min",
				"/assets/js/lib/handlebars.min"
			],
			"backbone": [
				"http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min",
				"/assets/js/lib/backbone-min"
			],
			"jquery.easing": [
				"https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min",
				"/assets/js/lib/jquery.easing.min"
			],
			"jquery.scrollTo": [
				//"https://cdnjs.cloudflare.com/ajax/libs/jquery-scrollTo/1.4.3.1/jquery.scrollTo.min",
				"/assets/js/lib/jquery.scrollTo.min"
			],
			"jquery.localscroll": [
				"/assets/js/lib/jquery.localscroll-1.2.7-min"
			],
			"bootstrap-scrollspy": [
				"/assets/js/lib/bootstrap-scrollspy"
			],
			"showdown": [
				"http://cdn.kdi.co/js/libs/showdown.min",
				"/assets/js/lib/showdown.min"
			],
			"backbone.app": [
				"/assets/js/helpers/backbone.app-min"
			],
			"helper-handlebars": [
				"/assets/js/helpers/handlebars"
			],
			"app-models": [
				"/assets/js/app/models"
			],
			"app-views": [
				"/assets/js/app/views"
			],
			"app-controllers": [
				"/assets/js/app/controllers"
			],
			"google-plus": [
				"https://apis.google.com/js/plusone"
			],
			"facebook": [
				"http://connect.facebook.net/en_US/all.js#xfbml=1"
			],
			"twitter": [
				"http://platform.twitter.com/widgets"
			]
		},
		"shim": {
			"backbone": {
				"deps": [
					"underscore",
					"jquery"
				],
				"exports": "Backbone"
			},
			"underscore": {
				"exports": "_"
			},
			"jquery.easing": {
				"deps": [
					"jquery"
				]
			},
			"jquery.scrollTo": {
				"deps": [
					"jquery",
					"jquery.easing"
				]
			},
			"jquery.localscroll": {
				"deps": [
					"jquery",
					"jquery.scrollTo"
				]
			},
			"bootstrap-scrollspy": {
				"deps": [
					"jquery"
				]
			},
			"backbone.app": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"handlebars"
				]
			},
			"helper-handlebars": {
				"deps": [
					"handlebars"
				]
			},
			"app-models": {
				"deps": [
					"backbone",
					"backbone.app",
					"underscore"
				]
			},
			"app-views": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"handlebars",
					"app-models"
				]
			},
			"app-controllers": {
				"deps": [
					"backbone",
					"underscore",
					"jquery",
					"app-models",
					"app-views"
				]
			}
		},
		"deps": [
			"jquery",
			"json2",
			"underscore",
			"backbone",
			"handlebars",
			"jquery.easing",
			"jquery.scrollTo",
			"jquery.localscroll",
			"bootstrap-scrollspy",
			"showdown",
			"backbone.app",
			"helper-handlebars",
			"app-models",
			"app-views",
			"app-controllers"
		]
	}

})()