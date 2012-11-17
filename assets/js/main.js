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



// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-16164477-8']);
_gaq.push(['_setDomainName', 'makesit.es']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();