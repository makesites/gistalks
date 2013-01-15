(function() {

	// Routers
	APP.Routers.Default = Router.extend({
		data: {}, 
		initialize: function() {
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'keys', 'home', 'user', 'presentation');
			// initialize other monitoring scripts 
			this.keys();
			
		}, 
		routes: {
			"": "home",
			":user": "user",
			":user/:id": "presentation"
		}, 
		home: function(){
			//console.log("home");
			var view = new APP.Views.Home();	
			// load social icons (after the app is loaded)
			this.shareLinks();
			// show common header
			this.showHeader();
			
		},
		user: function( user ){
			
			var collection = new APP.Collections.List({user : user });
			var view = new APP.Views.User({ collection : collection });
			// load social icons (after the app is loaded)
			this.shareLinks();
			// show common header
			this.showHeader();
			
		},
		presentation: function( user, id){
			
			var model = new APP.Models.Gist({id : id });
			model.fetch();
			var view = new APP.Views.Presentation({ model : model });
			// hide common header
			this.hideHeader();
			
		}, 
		keys: function(){
			$(document).keydown(function(e){
				// left key
				if (e.keyCode == 38) { 
				   var next = $('.active').prev().find('a').click();
				   return false;
				}
				
				if (e.keyCode == 40) { 
				   var next = $('.active').next().find('a').click();
				   return false;
				}
				if (e.keyCode == 37) { 
				   // console.log("hey");
				   
				   return false;
				}
				
				if (e.keyCode == 39) { 
				    var curr = $('.active a').attr('href');
				    $(curr).find('em').addClass('hover');
				    return false;
				}
			});
		},
		shareLinks: function(){
			require(["facebook", "twitter", "google-plus"], function(){
				// done ;)
			});
		},
		showHeader: function(){
			// remove common container
			$("header.common").show();
			
		}, 
		hideHeader: function(){
			// remove common container
			$("header.common").remove();
		}
		
	});

})();
