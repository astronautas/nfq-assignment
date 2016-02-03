define(['jquery', 'backbone', 'underscore', 'collections/GroupsCollection', 'text!views/users/templates/UserItemView.html'], 
function($, Backbone, _, GroupsCollection, ItemTpl) {
  var UserItemView = Backbone.View.extend({
    template  : _.template(ItemTpl),
    tagName   : 'li',
    className : 'list-item clearfix',

    events: {
      'click .js-delete' : 'delete'
    },

    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);

      this.render();
    },

    render: function() {
      this.$el.html(this.template({ 
        name           : this.model.get('name'),
        surname        : this.model.get('surname'),
        birthDate      : this.model.get('birthDate'),
        profilePicture : this.model.get('profilePicture'),
        bio            : this.model.get('bio'),
        groups         : this.groupsNames(this.model.get('groups'))
      }));
    },

    delete: function() {
      this.model.destroy();
    },

    groupsNames: function(ids) {
      var groupsNames = [];

      _.each(ids, function(id) {
        groupsNames.push(this.groupName(id));
      }, this);

      return groupsNames;
    },

    groupName: function(id) {
      var groupName;
      var groupsCollection = new GroupsCollection();

      groupsCollection.fetch({
        success: function(groups) {
          _.each(groups.models,  function(group) {
            if (group.get('id') == id) {
              groupName = group.get('name');
            }
          });
        }
      });

      return groupName;
    }
  });

  return UserItemView;
});