angular.module('app')

.controller('HomeController', function($scope, $state, $stateParams, QuestionsService){

  $scope.questions = QuestionsService.questions;

  $scope.$on('$ionicView.enter', function(){
    $scope.answer = null;
    $scope.question = getQuestion();
  });

  $scope.answerSelected = function(option){
    $scope.answer = option.label;
  };

  $scope.checkAnswer = function($event){
    $state.go('checkResult', {answer: $scope.answer});
  };

  function getQuestion(){
    var q;
    if($stateParams.questionIndex){
      q = QuestionsService.questions[$stateParams.questionIndex];
    }else{
      q = QuestionsService.getCurrentQuestion();
    }

    return q;
  }

});
