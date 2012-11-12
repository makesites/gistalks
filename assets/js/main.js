var app;

// load the config 
requirejs.config( config );

// when logic dependencies are loaded
function init(){
//$(function() {
	
	// initialize APP
	app = new APP();
	window.app = app;
	// start backbone history
	Backbone.history.start();
	
//});
}
