define(['jquery', 'backbone', 'underscore', 'app/views/groups/GroupItemView'], function($, Backbone, _, GroupItemView) {
  var GroupsListView = Backbone.View.extend({

    initialize: function(options) {
      _.bindAll(this, 'addOne', 'addAll');

      this.children   = [];
      this.options    = options || {};
      this.collection = this.options.collection;

      this.listenTo(this.collection, 'add', this.addOne);
      this.listenTo(this.collection, 'reset', this.addAll);

      this.collection.fetch();
    },

    addOne: function(model) {
      var view = new GroupItemView({ model: model });
      this.children.push(view);
      this.$el.append(view.$el);
    },

    addAll: function() {
      _.each(this.collection.models, function(model) {
        this.addOne(model);
      }, this);
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
  return GroupsListView;
});