angular.module('app')

.controller('QuestionResultController', function($scope, $state, $stateParams, QuestionsService, ScoresService){

  $scope.$on('$ionicView.enter', function(){

    $scope.result = {
      isRight: answerWasRight(),
      title: answerWasRight() ? 'Felicitaciones!' : 'Incorrecto',
      question: QuestionsService.getCurrentQuestion()
    };

    $scope.scores = ScoresService.scores;
/*
    var score = {
      userId: ,
      question: QuestionsService.getCurrentQuestion(),
      answer:
    }*/
    ScoresService.update(score);
  });

  // TODO Cambiar por un filtro
  $scope.getIcon = function(ranking){
    if(ranking < 4){
      return "../../img/ranking_" + ranking + ".svg";
    }else{
      return "/img/no-ranking.svg";
    }
  };

  $scope.nextQuestion = function (){
    QuestionsService.moveToNextQuestion();
    $state.go("home");
  };

  function answerWasRight(){
    return $stateParams.answer === $scope.result.question.answer;
  }
});
