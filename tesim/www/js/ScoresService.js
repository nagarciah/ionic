/**
scores = [{
    question: '',
    answer: 'A',
    user: {name: 'Carlos', id: 'email'},
    score: 0.5,
    correctAnswer: true
  }];
*/

angular.module('app')
.factory('ScoresService', function(UserService, _, RepositoryService){
  // TODO Usar repositorio para inicializar marcadores
  var _scores = RepositoryService.scores; //firebase

  var _updateScore = function(score){
    //TODO Usar repositorio para actualizar el marcador
    score.user = UserService.user;

    // Calcula puntaje por responder bien la pregunta
    if(score.question.answer === score.answer){
      score.score = score.question.score;
      score.correctAnswer = true;
    }else{
      score.score = 0;
      score.correctAnswer = false;
    }

    // Busca si ya se había respondido la pregunta
    var previousScore;
    if(_scores.lenght>0){
      previousScore = _.find(_scores, function(s){
        return s.question.id === score.question.id;
      });
    }

    // Actualiza o inserta la respuesta
    if(previousScore){
      // TODO Reemplazar en el arreglo con el nuevo item
      previousScore.answer = score.answer;
      previousScore.score = score.score;
    }else{
      //_scores.push(score);
      RepositoryService.add(score); //firebase
    }
  };

  // TODO Esta mostranlo los reslutados de la pregunta anterior
  var _getRanking = function (){
    // http://stackoverflow.com/questions/19547622/map-reducing-object-with-underscore/19602150#19602150
    var totalScores = _.chain(_scores)
    .groupBy(function(i) {
      return i.user.id;
    })
    .map(function(value, key){
      var sum = _.reduce(value, function(memo, val){ return memo + val.score;}, 0);
      return {
        name: key,
        totalScore: sum / value.length,
        lastOneWasCorrect: value[value.length-1].correctAnswer // Sólo interesa la última respuesta
      };
    })
    .sortBy(function(n){ return -n.totalScore; })
    .value();

    return totalScores;
  };

  return {
    scores: _scores,
    update: _updateScore,
    getRanking: _getRanking
  };

});
