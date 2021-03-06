// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var config = {
  apiKey: "AIzaSyB8kHFGBaoysBV_933pGw_SIR5uiTywjQI",
  authDomain: "tesim-e1738.firebaseapp.com",
  databaseURL: "https://tesim-e1738.firebaseio.com",
  storageBucket: "tesim-e1738.appspot.com",
};
firebase.initializeApp(config);

angular.module('app', ['ionic', 'underscore', 'firebase'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/home?questionIndex',
    templateUrl: 'views/home/home.html',
    controller: 'HomeController'
  });

  $stateProvider.state('checkResult', {
    url: '/checkResult?answer',
    templateUrl: 'views/checkResult/checkResult.html',
    controller: 'CheckResultController'
  });

  $urlRouterProvider.otherwise('/home');
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
