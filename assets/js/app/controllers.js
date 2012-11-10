(function() {

	// Routers
	APP.Routers.Default = Router.extend({
		data: {}, 
		initialize: function() {
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'index');
			// initialize other monitoring scripts 
			$('.navbar').scrollspy();
			// $.localScroll.defaults.axis = 'y';
			
		}, 
		routes: {
			"": "index",
			":page": "index"
		}, 
		index: function(){
			
			
			
		}
		
	});

})();
