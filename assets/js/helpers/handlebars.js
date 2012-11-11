Handlebars.registerHelper("fontSize", function(count, max){
	
	var maxEm = 3;
	var size = (count/max) * maxEm;
	return size+"em";
	
});

Handlebars.registerHelper("splitSlides", function( md ){
	
	
	console.log(md );
	
});

// Source: http://rockycode.com/blog/handlebars-loop-index/
Handlebars.registerHelper('iter', function(context, options) {
  var fn = options.fn, inverse = options.inverse;
  var ret = "";

  if(context && context.length > 0) {
    for(var i=0, j=context.length; i<j; i++) {
		ret = ret + fn(_.extend({}, { field: new Handlebars.SafeString(context[i]) }, { i: i, iPlus1: i + 1 }));
    }
  } else {
    ret = inverse(this);
  }
  return ret;
});


Handlebars.registerHelper("loop", function(array, fn) {
	var buffer = "";
	
	if(typeof array == "undefined")return;
	
	for (var i = 0, j = array.length; i < j; i++) {
		var item = array[i];

		// stick an index property onto the item, starting with 1, may make configurable later
		item.index = i+1;

		// show the inside of the block
		buffer += fn(item);
	}

	// return the finished buffer
	return buffer;

});