define(['backbone', 'localstorage', 'app/models/UserModel'], function(Backbone, localstorage, UserModel) {
  var UsersCollection = Backbone.Collection.extend({
    model: UserModel,
    localStorage: new Backbone.LocalStorage('Users'),
  });

  return UsersCollection;
});