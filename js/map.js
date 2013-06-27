    
    var Tweet = Backbone.Model;
    
    var Tweets = Backbone.Collection.extend({
        
        // The search url which will pull in all tweets 1000 miles from roughly the center of the United States
        url: "http://localhost:3000/products.json",
 
        // Filters information before it is passed into the collection
        parse: function(response) {
            
            // Filter all tweets without a specific geolocation
            var filtered = _.filter(response.results, function(d) {
                if (d !== null) {
                    alert(d);
                }
            });
            
            this.add(filtered);
            
        },
            
        initialize: function() {
          
          
          this.fetch();
        }
  });



    
    var Map = Backbone.View.extend({
        
        el: $('#map_canvas'),
                        
        initialize: function() {
            
            // Roughly the center of the United States
            var latlng = new google.maps.LatLng(13, 81);
            

            var myOptions = {
                zoom: 5,
                center: latlng,
                mapTypeControl: false,
                navigationControlOptions: {
                style: google.maps.NavigationControlStyle.ANDROID
                },
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            
            // Force the height of the map to fit the window
            this.$el.height($(window).height() - $("header").height());
            
            // Add the Google Map to the page
            var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
            
            // Bind an event to add tweets from the collection
            
            this.collection.bind('add', function(model) {
                                       

               
                
                
            });
        }
    }); //-- End of Map view


//... Mode, Collection, and View code ...//
 
 
//-- Initialize ---------------------------------------------------------------//
    
    // Create an instance of the tweets collection
    var tweets = new Tweets({
        model: Tweet
    });
 
    // Create the Map view, binding it to the tweets collection    
    var twitter_map = new Map({
        collection: tweets
    });
 

