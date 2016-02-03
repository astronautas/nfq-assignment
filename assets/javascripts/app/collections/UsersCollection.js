define(['backbone', 'localstorage'], function(Backbone) {
  var UsersCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage('Users'),
    
    initialize: function() {

    }
  });

  return UsersCollection;
});