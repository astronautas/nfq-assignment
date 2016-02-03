requirejs.config({
  baseUrl: '.',
  paths: {
    'jquery'       : 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min',
    'backbone'     : 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min',
    'underscore'   : 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min',
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