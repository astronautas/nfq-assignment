define(['backbone', 'underscore', 'app/collections/UsersCollection'], 
function(Backbone, _, UsersCollection) {
  var GroupModel = Backbone.Model.extend({
    membersCount: function() {
      var that    = this;
      var count   = 0;
      var users   = new UsersCollection();

      var members = users.fetch({
        success: function(collection, response) {
          _.each(collection.models, function(model) {
            var contains = _.contains(model.get('groups'), that.get('id'));
            if (contains) count ++;
          });
        }
      });

      return count;
    },

    validate: function(attrs, options) {
      var errors = [];

      // Errors if empty
      for (var key in attrs) {
        if (attrs.hasOwnProperty(key)) {
          if (attrs[key].length === 0) {
            errors.push(key + 'cannot be empty');
          }
        }
      }

      if (errors.length) return errors;
    }
  });

  return GroupModel;
});