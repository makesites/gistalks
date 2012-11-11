(function(_, Backbone) {
  
	APP.Models.Gist = Model.extend({
		defaults: { 
			"comments_url": "",
			"comments": 0,
			"created_at": "",
			"files": {},
			"user": {}
		}, 
		url: function(){ return "https://api.github.com/gists/"+ this.id },
		initialize: function(){
			// call cache on every state change
			
		}
	});
	
	APP.Collections.List = Collection.extend({
		model: APP.Models.Gist, 
		url: function(){ return "https://api.github.com/users/"+ this.user +"/gists" },
		initialize: function( options ){
			// call cache on every state change
			this.user = options.user || null;
			this.fetch();
		}
	});
	
	/*APP.Models.User = Model.extend({
		defaults: { }, 
		initialize: function(){
			// call cache on every state change
			
		}
	});
	
	APP.Models.Tag = Model.extend({
		defaults: { }, 
		initialize: function(){
			// call cache on every state change
			
		}
	});*/
	
	
	
	


})(this._, this.Backbone);
