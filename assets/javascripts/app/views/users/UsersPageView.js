define(['jquery', 'backbone', 'underscore', 'app/collections/UsersCollection', 
        'text!app/views/users/templates/UsersPageView.html', 'app/views/AddView', 'app/views/users/UsersListView'], 
function($, Backbone, _,  UsersCollection, UsersPageViewTpl, AddView, UsersListView)  {
  var UsersPageView = Backbone.View.extend({
    template: _.template(UsersPageViewTpl),

    events: {
      'click .js-add-new' : 'addItem'
    },

    initialize: function() {
      _.bindAll(this, 'addItem');

      // Instantiate users collection
      // 'Add new' form and users list will need it
      this.render();
      this.collection = new UsersCollection();
      this.usersList  = new UsersListView({ el: '.js-users-list', collection: this.collection });
      this.children   = [this.usersList];
    },

    render: function() {
      this.$el.html(this.template());
    },

    addItem: function() {
      this.addUser = new AddView({ el: '.js-app', collection: this.collection, type: 'user'});
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

  return UsersPageView;
});