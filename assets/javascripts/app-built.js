define("app/router",["backbone"],function(e){var t=e.Router.extend({});return t}),requirejs.config({baseUrl:".",paths:{jquery:"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min",backbone:"https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.3/backbone-min",underscore:"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min",text:"app/libs/text",localstorage:"app/libs/backbone.localStorage"}}),require(["jquery","backbone","app/router"],function(e,t,n){e(document).ready(function(){var e=new n;t.history.start()})}),define("app/app",function(){});