define(['jquery', 'backbone', 'underscore', 'text!app/views/templates/AddItemView.html'], 
function($, Backbone, _, AddItemViewTpl) {
  var AddItemView = Backbone.View.extend({
    template: _.template(AddItemViewTpl),

    events: {
      'click .js-item-submit' : 'submitItem'
    },

    initialize: function(options) {
      _.bindAll(this, 'submitItem');

      this.options    = options || {};
      this.collection = this.options.collection;

      if (this.options.type === 'user') {
        this.renderAddUser();
      } else {
        this.renderAddGroup();
      }
    },

    renderAddUser: function() {
      // Pass in groups collection to be able to render
      // group selection for user
      this.$el.append(this.template({
        attributes: ['name', 'surname', 'birthDate', 'profilePicture', 'bio'],
        groups: [1, 4, 5]
      }));
    },

    renderAddGroup: function() {
      this.$el.append(this.template({
        attributes: ['name', 'description']
      }));
    },

    submitItem: function() {
      // Collect data from fields
      var model = {};
      var checkboxValues = [];

      var $form   = this.$el.find('.js-item-form');
      var $inputs = $form.find('input');

      $inputs.each(function(index, item) {
        var $item = $(item);

        // If we are adding something with multiple selections
        // first gather values, and only then add to model
        // If there are no checkboxes, do not add property with name of one of those checkboxes
        if ($item.is(':checkbox')) {
          if (item.checked) checkboxValues.push($item.val());
        } else {
          model[$item.attr('name')] = $item.val();
        }
      });

      if (checkboxValues.length !== 0) model.groups = checkboxValues;

      // When collected, create model for collection
      // with these values
      console.log(model);
      this.collection.create(model);
    }
  });

  return AddItemView;
});