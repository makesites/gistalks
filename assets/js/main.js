var app;

// when logic dependencies are loaded
$(function() {
	
	// initialize APP
	app = new APP();
	window.app = app;
	// start backbone history
	Backbone.history.start();
	
	// open external links in new window 
	$('a[rel*=external]').click( function() { 
		window.open(this.href, '_blank'); return false; 
	});
	
	// call the localScroll plugin on the document, allowing y scrolling only
	// $.localScroll.defaults.axis = 'y';
	$.localScroll.defaults.axis = 'xy';
	
	$(document).keydown(function(e){
    // left key
	if (e.keyCode == 37 || e.keyCode == 38) { 
       var next = $('.active').prev().find('a').click();
	   return false;
    }
	
	if (e.keyCode == 39 || e.keyCode == 40) { 
       var next = $('.active').next().find('a').click();
	   return false;
    }
});
// add to presentation body:
// data-spy="scroll" data-target=".navbar"

	
	

});