// /rooms : listado de todos los cuartos disponibles
var rooms = {
  id: 'string',
  name: 'string',
//  users: [{id:'string', name:'string'}]
};

// /rooms/r1/user1: todas las respuestas de un usuario en este cuarto

// /rooms/r1/last: respuestas de la ultima pregunta para todos los usuarios

// https://github.com/firebase/angularfire/blob/master/docs/quickstart.md
var config = {
  apiKey: "AIzaSyB8kHFGBaoysBV_933pGw_SIR5uiTywjQI",
  authDomain: "tesim-e1738.firebaseapp.com",
  databaseURL: "https://tesim-e1738.firebaseio.com",
  storageBucket: "tesim-e1738.appspot.com",
};
firebase.initializeApp(config);

angular.module('app'/*, ['firebase']*/)
.factory('RepositoryService', function(/*UserService, $scope, */$firebaseArray){
  //var rooms = firebase.database().ref().child('rooms');
  //var scores = firebase.database().ref().child('scores');
  //scores.push({user:"nelson", cat:"test"});

/*
  var ref = firebase.database().ref().child("data");
  var syncObject = $firebaseObject(ref);
  syncObject.$bindTo($scope, "data");
  $scope.data = {user:"nelson", cat:"test"};
  */

  var rootRef = firebase.database().ref().child("scores");
  var _scores = $firebaseArray(rootRef);

  var _add = function(item){
    _scores.$add(item);
  };

  return {
    add: _add,
    scores: _scores
  };
});
