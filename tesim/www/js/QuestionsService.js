angular.module('app')
.factory('QuestionsService', function(){
  var questions = [];

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

    questions.push(question);
  }



  return {
    questions: questions,
    questionIndex: 0,
    moveToNextQuestion: function(){
      this.questionIndex++;
      if(this.questionIndex===this.questions.length){
        this.questionIndex = 0;
      }
    },

    getCurrentQuestion: function(){
      return this.questions[ this.questionIndex ];
    }
  };
});
