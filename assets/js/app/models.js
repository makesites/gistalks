(function(_, Backbone) {
  
	APP.Models.Gist = APP.Model.extend({
		defaults: { 
			"comments_url": "",
			"comments": 0,
			"created_at": "",
			"files": {},
			"user": {}
		}, 
		url: function(){ return "https://api.github.com/gists/"+ this.id },
		initialize: function(){
			// 
			_.bindAll(this);
		},
		parse: function( data ){
			//console.log(data);
			return data;
		}
	});
	
	APP.Collections.List = APP.Collection.extend({
		model: APP.Models.Gist, 
		url: function(){ return "https://api.github.com/users/"+ this.user +"/gists" },
		initialize: function( options ){
			// 
			this.user = options.user || null;
			this.fetch();
		},
		parse: function( data ){
			// filter the items that have #talk in the description
			for( var i in data ){
				if( data[i].description.search("#talk") < 0 ) delete data[i];
			}
			
			return data;
		}
	});
	

})(this._, this.Backbone);
