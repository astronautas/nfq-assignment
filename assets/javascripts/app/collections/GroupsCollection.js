define(['backbone', 'localstorage', 'app/models/GroupModel'], function(Backbone, localstorage, GroupModel) {
  var GroupsCollection = Backbone.Collection.extend({
    model: GroupModel,
    localStorage: new Backbone.LocalStorage('Groups'),
  });

  return GroupsCollection;
});