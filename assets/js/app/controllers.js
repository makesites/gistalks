(function() {

	// Routers
	APP.Routers.Default = Router.extend({
		data: {}, 
		initialize: function() {
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'home', 'user', 'presentation');
			// initialize other monitoring scripts 
			$('.navbar').scrollspy();
			// $.localScroll.defaults.axis = 'y';
			
		}, 
		routes: {
			"": "home",
			":user": "user",
			":user/:id": "presentation"
		}, 
		home: function(){
			
			console.log("home");
			this.view = new APP.Views.Home();
			
		},
		user: function( user ){
			
			var collection = new APP.Collections.List({user : user });
			var view = new APP.Views.User({ collection : collection });
			
		},
		presentation: function( user, id){
			
			console.log("presentation", user);
			console.log("presentation", id);
			var view = new APP.Views.Presentation();
			
		}
		
	});

})();
