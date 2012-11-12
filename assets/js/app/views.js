(function(_, Backbone) {
	
	// template compiler
	Template.prototype.compile = Handlebars.compile;
	
	APP.Views.Home = View.extend({
		el: "#main", 
		events: {
			"submit #github-search" : "getUsername"
		}, 
		options: {
			url: "/assets/html/home.html",
			attr: 'home'
		}, 
		getUsername: function(e){
			e.preventDefault();
			// get username - remove @ symbol if necessary
			var id = $(e.target).find("input[name='query']").val().replace(/@/g, '');
			app.navigate("/"+id, true);
		}
	});
	
	APP.Views.User = View.extend({
		el: "#main", 
		options: {
			url: "/assets/html/user.html",
			attr: 'user'
		}, 
		events: {
			"click .cta li a" : "clickPresentation"
		}, 
		clickPresentation: function( e ){
			e.preventDefault();
			var url = $(e.target).attr("href");
			app.navigate(url, true);
		}
	});
	
	APP.Views.Presentation = View.extend({
		el: "#main", 
		options: {
			url: "/assets/html/presentation.html",
			attr: 'presentation'
		}, 
		events: {
			"click header nav a" : "clickNav"
		}, 
		render: function(){
			
			if( _.isUndefined( this.slides ) || _.isEmpty( this.slides ) ){
				// find which file has the slides
				this.slides = this.findSlides( this.data.get("files") );
				// parse the markdown file
				var slides = new APP.Templates.Slides( this.slides.content );
				// save the content in the model
				if( !_.isEmpty( this.slides ) ) this.data.set({"slides" : slides.split("<hr />")  });
			}
			// continue rendering the page as usual
			View.prototype.render.call(this, arguments);
			
			this.postRender();
		}, 
		postRender: function(){
			// assign the localScroll functionality to the nav ul
			$('header.top nav > ul').localScroll({
				axis:'xy',
				hash: false
			});
			// updating scrollspy
			$('[data-spy="scroll"]').each(function () {
			  var $spy = $(this).scrollspy('refresh')
			});
		}, 
		// Helpers
		findSlides : function( files ){
			var selected = "";
			// rule: either the first .md file or by priority presenation.md
			for(var i in files){
				// key is the filename - value is the full url
				if( ( i.substr(-3) == ".md" || files[i].language == "Markdown" ) && selected != "presenation.md"){ 
					selected = files[i];
				}
			}
			return selected;
		}, 
		clickNav: function( e ){
			e.preventDefault();
			var myLink = this.findLink(e.target);
			$(this.el).find("nav li").removeClass('active');
			$(this.el).find("nav a[href='"+myLink+"']").closest("li").addClass('active');
		}, 
	});
	
	// Markdown processing
	APP.Templates.Slides = Template.extend({
		// create slides using seperator
		split : function(seperator, attr){
			// fallback
			if( _.isUndefined(attr) ) attr = "default";
			
			var slides = this.get("default").toString().split(seperator);
			
			return slides;
			
		}
	});
	APP.Templates.Slides.prototype.compile = (new Showdown.converter()).makeHtml;
	
})(this._, this.Backbone);