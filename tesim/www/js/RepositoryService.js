// /rooms : listado de todos los cuartos disponibles
var rooms = {
  id: 'string',
  name: 'string',
//  users: [{id:'string', name:'string'}]
};

// /rooms/r1/user1: todas las respuestas de un usuario en este cuarto
// /rooms/r1/last: respuestas de la ultima pregunta para todos los usuarios
// https://github.com/firebase/angularfire/blob/master/docs/quickstart.md


angular.module('app')
.factory('RepositoryService', function($firebaseArray){
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
