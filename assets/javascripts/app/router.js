define(['backbone', 'app/views/users/UsersPageView', 'app/views/groups/GroupsPageView'], 
function(Backbone, UsersPageView, GroupsPageView) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '(/)'    : 'usersPage',
      'users'  : 'usersPage',
      'groups' : 'groupsPage'
    },

    usersPage: function() {
      this.loadPage(new UsersPageView({ el: '.js-app' }));
    },

    groupsPage: function() {
      this.loadPage(new GroupsPageView({ el: '.js-app' }));
    },

    loadPage: function(view) {
      console.log('Load');
      // Destroy (dereference) old (current) view and its subviews
      // If the view has its own close function, call it. Otherwise, use remove
      if (this.view) {
        this.view.close ? this.view.close() :  this.view.remove()
      }
      
      // New view becomes the current view
      this.view = view;
    }
  });

  return AppRouter;
});