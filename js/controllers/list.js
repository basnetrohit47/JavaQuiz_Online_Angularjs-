(function(){

  /*
     * Creating List controller and attaching it to the main quizApps module
     */
angular
.module("quizApp")
.controller("listCtrl",ListController);
/*
     * Dependency injection. This allows the script to be minified and uglified
     * without breaking the code. This is acheived by passing the dependencies
     * as strings in an array through the $inject method to the controller.
     */
  ListController.$inject=['DataService','filterFilter','Quizfact'];
  /*
   * Definition for the List controller. quizMetrics and dataService are two
   * services that are created in js/factories/QuizFact.js,js/factories/DataService.js
   * and filterFilter to filter the data.
   * respectively.
   */
function ListController(DataService,filterFilter,Quizfact){

  var v=this;
  v.show=show;
  v.dataservice=DataService;
  v.Quizfact=Quizfact;         // Controllers reference to the Quiz data from factory


  function show(index){
    //simple function  to show the quiz according to the choice of user
  Quizfact.getbyid(index);     //Get the data by category of quiz


}




    }


})();
