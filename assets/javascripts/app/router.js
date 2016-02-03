define(['backbone', 'views/users/UsersPageView'], function(Backbone) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '(/)'    : 'usersPage',
      'users'  : 'usersPage',
      'groups' : 'groupsPage'
    },

    usersPage: function() {
      this.loadPage(new UsersPageView());
    }
  });

  return AppRouter;
});