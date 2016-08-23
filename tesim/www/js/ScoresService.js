/**
score = {
  question:
  answer: string,
  user:
  score:
}
*/
angular.module('app')
.factory('ScoresService', function(UserService){
  var scores = [{
    question: '',
    answer: 'A',
    user: {name: 'Carlos', id: 'email'},
    score: 0.5
  }];

  var _updateScore = function(score){
    //TODO Usar fireBase para actualizar el marcador
    score.user = UserService.user;

    // Calcula puntaje por responder bien la pregunta
    if(score.question.answer === score.answer){
      score.score = score.question.score;
    }else{
      score.score = 0;
    }

    // Busca si ya se había respondido la pregunta
    var previousScore;
    if(scores.lenght>0){
      // TODO Cambiar underscore a un módulo
      previousScore = window._.find(scores, function(s){
        return s.question.id === score.question.id;
      });
    }

    // Actualiza o inserta la respuesta
    if(previousScore){
      // TODO Reemplazar en el arreglo con el nuevo item
      previousScore.answer = score.answer;
      previousScore.score = score.score;
    }else{
      scores.push(score);
    }
  };

  var _getRanking = function (){
    // http://stackoverflow.com/questions/19547622/map-reducing-object-with-underscore/19602150#19602150
    /*var scoresPerUser = window._.groupBy(scores, function(i) {return i.user.id;});
    var totalScores = window._.map(scoresPerUser, function(value, key){
      var sum = window._.reduce(value, function(memo, val){ return memo + val.score;}, 0);
      return {name: key, score: sum / value.length};
    });

    totalScores = window._.sortBy(totalScores, function(n){ return -n.score; });
    */
    var totalScores = window._.chain(scores)
    .groupBy(function(i) {return i.user.id;})
    .map(function(value, key){
      var sum = window._.reduce(value, function(memo, val){ return memo + val.score;}, 0);
      return {name: key, score: sum / value.length};
    })
    .sortBy(function(n){ return -n.score; })
    .value();

    return totalScores;
  };

  return {
    scores: scores,
    update: _updateScore,
    getRanking: _getRanking
  };

});
