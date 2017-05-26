(function(){

  angular
  .module("quizApp")
  .controller("ResultCtrl",ResultController);
  ResultController.$inject=['Quizfact'];
  function ResultController(Quizfact){
     var v=this;
     v.Quizfact=Quizfact;
  }
})();
