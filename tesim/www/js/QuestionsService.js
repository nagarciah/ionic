angular.module('app')
.factory('QuestionsService', function($firebaseArray, $rootScope){
  //var ref = firebase.database().ref().child("questions");
  var _questions = [];//$firebaseArray(ref);

  var _createQuestions = function(){
    for(var i=0; i<5; i++){
      var question = {
        id: i,
        text: 'Pregunta ' + i,
        answer: 'A',
        score: 1,
        options: [
          {label: 'A', text: 'Primera opción de la pregunta ' + i },
          {label: 'B', text: 'Segunda opción de la pregunta ' + i},
          {label: 'C', text: 'Tercera opción de la pregunta ' + i},
          {label: 'D', text: 'Cuarta opción de la pregunta ' + i}
        ]
      };
      //_questions.$add(question);
      _questions.push(question);
    }
  };
  _createQuestions();

  // Evento para actualizar variable al finalizar el llamado asincrono
  /*ref.on("value", function(snapshot) {
      _questions = snapshot.val();
  });*/

  return {
    questions: _questions,
    questionIndex: 0,
    moveToNextQuestion: function(){
      this.questionIndex++;
      if(this.questionIndex === _questions.length){
        this.questionIndex = 0;
      }
    },

    getCurrentQuestion: function(){
      return _questions[ this.questionIndex ];
    }
  };
});
