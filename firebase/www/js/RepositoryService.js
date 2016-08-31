angular.module('app')
.factory('RepositoryService', function($ionicLoading, $firebaseArray){
  $ionicLoading.show({template: "Cargando preguntas..."});

  var ref = firebase.database().ref().child("questions");
  var _questions = $firebaseArray(ref);

  ref.on("value", function(snapshot) {
    // This isn't going to show up in the DOM immediately, because
    // Angular does not know we have changed this in memory.
    // To fix this, we can use $scope.$apply() to notify Angular that a change occurred.
    _questions = snapshot.val();
    $ionicLoading.hide();
  });

  return {
    questions: _questions
  };
});
