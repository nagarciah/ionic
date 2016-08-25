// https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._; //Underscore must already be loaded on the page
});
