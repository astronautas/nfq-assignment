define(['jquery', 'backbone', 'underscore', 'collections/GroupsCollection', 
        'text!views/templates/AddUserView.html', 'text!views/templates/AddGroupView.html'], 
function($, Backbone, _, GroupsCollection, AddUserTpl, AddGroupTpl) {
  var AddItemView = Backbone.View.extend({
    userTemplate:  _.template(AddUserTpl),
    groupTemplate: _.template(AddGroupTpl),

    events: {
      'click .js-item-submit' : 'submitItem'
    },

    initialize: function(options) {
      _.bindAll(this, 'submitItem', 'invalidForm');

      this.options    = options || {};
      this.collection = this.options.collection;

      this.listenTo(this.collection, 'invalid', this.invalidForm);

      if (this.options.type === 'user') {
        this.renderAddUser();
      } else {
        this.renderAddGroup();
      }
    },

    allGroups: function() {
      var list = [];
      var groups = new GroupsCollection();

      groups.fetch({
        success: function() {
          _.each(groups.models, function(model) {
            list.push({
              id: model.get('id'),
              name: model.get('name')
            });
          });
        }
      });

      return list;
    },

    renderAddUser: function() {
      var groups = this.allGroups();

      // Pass in groups collection to be able to render
      // group selection for user
      this.$el.append(this.userTemplate({
        groups: groups
      }));
    },

    renderAddGroup: function() {
      this.$el.append(this.groupTemplate({
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
      var that = this;
      this.collection.create(model, { validate: true, success: function() {
        that.$el.find('.js-add-item').remove();
      }});
    },

    invalidForm: function() {
      this.$el.find('.js-item-form').addClass('invalid');
    },

  });

  return AddItemView;
});