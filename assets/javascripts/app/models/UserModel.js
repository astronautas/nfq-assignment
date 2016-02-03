define(['backbone'], function(Backbone) {
  var UserModel = Backbone.Model.extend({
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

  return UserModel;
});