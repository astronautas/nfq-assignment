define(['jquery', 'backbone', 'underscore', 'collections/GroupsCollection', 
        'text!views/groups/templates/GroupsPageView.html', 'views/AddView', 'views/groups/GroupsListView'], 
function($, Backbone, _,  GroupsCollection, GroupsPageViewTpl, AddView, GroupsListView)  {
  var GroupsPageView = Backbone.View.extend({
    template: _.template(GroupsPageViewTpl),

    events: {
      'click .js-add-new' : 'addItem'
    },

    initialize: function() {
      _.bindAll(this, 'addItem');

      // Instantiate users collection
      // 'Add new' form and users list will need it
      this.render();
      this.collection = new GroupsCollection();
      this.groupsList = new GroupsListView({ el: '.js-groups-list', collection: this.collection });
      this.children   = [this.groupsList];
    },

    render: function() {
      this.$el.html(this.template());
    },

    addItem: function() {
      this.addGroup = new AddView({ el: '.js-app', collection: this.collection, type: 'group'});
    },

    close: function() {
      // Remove all children views
      _.each(this.children, function(child) {
        child.close ? child.close() : child.remove();
      });

      // Remove itself
      this.remove();
    }
  });

  return GroupsPageView;
});