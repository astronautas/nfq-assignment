requirejs.config({
  baseUrl: '.',
  paths: {
    'jquery'       : 'libs/jquery-min',
    'backbone'     : 'libs/backbone-min',
    'underscore'   : 'libs/underscore-min',
    'text'         : 'libs/text',
    'localstorage' : 'libs/backbone.localStorage-min'
  }
});

require(['jquery', 'backbone', 'router'], function($, Backbone, Router) {
  $(document).ready(function() {
    var router = new Router();

    if (Backbone.history) {
        Backbone.history.start();
    }
  });
});