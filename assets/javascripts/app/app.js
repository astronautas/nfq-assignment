requirejs.config({
  baseUrl: '.',
  paths: {
    'jquery'       : 'app/libs/jquery-min',
    'backbone'     : 'app/libs/backbone-min',
    'underscore'   : 'app/libs/underscore-min',
    'text'         : 'app/libs/text',
    'localstorage' : 'app/libs/backbone.localStorage-min'
  }
});

require(['jquery', 'backbone', 'app/router'], function($, Backbone, Router) {
  $(document).ready(function() {
    var router = new Router();

    if (Backbone.history) {
        Backbone.history.start();
    }
  });
});