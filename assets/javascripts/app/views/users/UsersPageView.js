define(['jquery', 'backbone', 'underscore', 'app/collections/UsersCollection', 
        'text!app/views/users/templates/UsersPageView.html', 'app/views/AddView'], 
function($, Backbone, _,  UsersCollection, UsersPageViewTpl, AddView)  {
  var UsersPageView = Backbone.View.extend({
    template: _.template(UsersPageViewTpl),

    events: {
      'click .js-add-new' : 'addItem'
    },

    initialize: function() {
      _.bindAll(this, 'addItem');

      // Instantiate users collection
      // 'Add new' form and users list will need it
      this.collection = new UsersCollection();
      this.render();
    },

    render: function() {
      this.$el.html(this.template());
    },

    addItem: function() {
      this.addUser = new AddView({ el: '.js-app', collection: this.collection, type: 'user'});
    }
  });

  return UsersPageView;
});