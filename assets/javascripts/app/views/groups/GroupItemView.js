define(['jquery', 'backbone', 'underscore', 'text!app/views/groups/templates/GroupItemView.html'], 
function($, Backbone, _, ItemTpl) {
  var GroupItemView = Backbone.View.extend({
    template  : _.template(ItemTpl),
    tagName   : 'li',
    className : 'list-item',

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
        description    : this.model.get('description'),
        membersCount   : this.model.membersCount()
      }));
    },

    delete: function() {
      this.model.destroy();
    }
  });

  return GroupItemView;
});