(function(_, Backbone) {
	
	APP.Views.Home = View.extend({
		el: "#main", 
		url: "/assets/html/home.html"
	});
	
	APP.Views.User = View.extend({
		el: "#main", 
		url: "/assets/html/user.html"
	});
	
	APP.Views.Presentation = View.extend({
		el: "#main", 
		url: "/assets/html/presentation.html"
	});
	
	APP.Views.Main = View.extend({
		// the template file that's used as a resource for the markup
		el: "body", 
		
		events: {
			"click a[rel='external']" : "clickExternal",
			"click .link": "selectLink",
		},
		 
		initialize: function(options){ 
			
			// every function that uses 'this' as the current object should be in here
			_.bindAll(this, 'render', 'clickExternal', 'selectLink'); 
			
			// this.views = {};
			
			
			
			// assign the localScroll functionality to the nav ul
			// $(this.el).find('header.top nav > ul').localScroll({
				// hash: true
			// });
			
			// render the page
			this.render();
			
		},
		// Presentation View rendering
		render: function(){
			
			// remove loading state
			$("body").removeClass("loading");
			
			// return the object for reference
			return this;
		}, 
		
		clickExternal: function(e){
			e.preventDefault();
			var href = this.findLink(e.target);
			window.open(href, '_blank'); return false; 
		},
		
		selectLink: function (e) {
			var myLink = this.findLink(e.target);
			$(this.el).find('nav li').removeClass('active');
			$(this.el).find('nav a:[href='+myLink+']').closest("li").addClass('active');
		},
		
		findLink: function (obj) {
			if (obj.tagName != "A") {
				return $(obj).closest("a").attr("href");
			} else {
				return $(obj).attr("href");
			}
		}
	
	});
	
	
	
	
	
	
	
	
})(this._, this.Backbone);