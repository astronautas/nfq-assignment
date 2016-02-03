define(['backbone', 'app/views/users/UsersPageView', 'app/views/groups/GroupsPageView'], 
function(Backbone, UsersPageView, GroupsPageView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '(/)'    : 'usersPage',
      '(/)users'  : 'usersPage',
      '(/)groups' : 'groupsPage'
    },

    usersPage: function() {
      this.loadPage(UsersPageView);
    },

    groupsPage: function() {
      this.loadPage(GroupsPageView);
    },

    loadPage: function(View) {
      // Destroy (dereference) old (current) view and its subviews
      // If the view has its own close function, call it. Otherwise, use remove
      if (this.view) {
        this.view.close ? this.view.close() : this.view.remove();
      }

      // Create app container, and use it as el for page view
      $('body').append('<div class="content js-app clearfix"></div>');

      // Create new view
      this.view = new View({ el: '.js-app'});
    }
  });

  return AppRouter;
});