angular.module('app')

.controller('CheckResultController', function($scope, $state, $stateParams, QuestionsService, ScoresService, UserService){

  $scope.$on('$ionicView.enter', function(){

    $scope.question = QuestionsService.getCurrentQuestion();

    $scope.result = {
      isRight: answerWasRight(),
      title: answerWasRight() ? 'Felicitaciones!' : 'Incorrecto',
    };

    var score = {
      question: $scope.question,
      answer: $stateParams.answer
    };
    ScoresService.update(score);

    $scope.ranking = ScoresService.getRanking();
  });

  // TODO Cambiar por un filtro
 /*$scope.getIcon = function(peopleScore){
    var ranking = peopleScore.ranking;

    if(ranking < 4){
      return "../../img/ranking_" + ranking + ".svg";
    }else{
      return "/img/no-ranking.svg";
    }
  };*/

  $scope.nextQuestion = function (){
    QuestionsService.moveToNextQuestion();
    $state.go("home");
  };

  function answerWasRight(){
    return $stateParams.answer === $scope.question.answer;
  }
});
