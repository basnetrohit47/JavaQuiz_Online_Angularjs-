/*
 * Immediately Invoked Function Expression (IIFE) to avoid creating global
 * variables and keep code safe
 */

(function(){
  /*
     * Call the angular module called turtleFacts that was created in js/app.js
     * then attach the controller quizCtrl to it.
     *
     * The quiz controller is added as a named function instead of an anon func
     * to keep the code clean and readable.
     */
        angular
                .module("quizApp")
                .controller("quizCtrl",QuizController);

                /*
                     * Angular dependency injection to avoid issues when uglifying the code
                     * Passing the dependencies as strings avoids them being changed when
                     * uglified.
                     */
              QuizController.$inject=['DataService','filterFilter','Quizfact','$interval'];

              function QuizController(DataService,filterFilter,Quizfact,$interval){
                  var v=this;
                  v.time=0;
                  var promisetime;
                  v.Quizfact=Quizfact;
                  v.data=DataService;
                   v.finaliseAnswers=finaliseAnswers;

                    v.test=1;
                    v.show=show;
                    v.ActiveQuiz=false;
                    v.ActivateQuiz=ActivateQuiz;
                    v.activequestion=0;
                    var numQuestionsAnswered=0;
                    v.setActiveQuestion=setActiveQuestion;
                    v.nextquestion=nextquestion;
                    v.selectAnswer=selectAnswer;
                  //  v.btnActive=false;
                    v.finalise=false;

                     //timing
                     v.start=function(){

                      if(v.time==0){

                     promisetime=$interval(function () {
                 v.time++;
               }, 1000);
             }
             else {
               v.time=0;


             }
             }




                    function ActivateQuiz(){
                      v.ActiveQuiz=true;
                    }


           var check=false;

                    function selectAnswer(index){
                  //  v.btnActive=true;
                     if(Quizfact.databyid[v.activequestion].selected==null){
                       check=true;
                     }



                    Quizfact.databyid[v.activequestion].selected=index;


                    }

                     function setActiveQuestion(){

                     var quizLen=Quizfact.databyid.length-1;
                  if(v.activequestion<quizLen){
                    v.activequestion++;
                  }

                  else {
                    v.activequestion=0;
                  }
                    //  v.activequestion=v.activequestion < quizLen?++v.activequestion:0;

                     }

                    function nextquestion(index){
                      //v.btnActive=false;
                       var quizLen=Quizfact.databyid.length;
                        //v.test=DataService.qList;
                       if(check==true){
                        numQuestionsAnswered++;
                        check=false;
                      }
                      if(numQuestionsAnswered>=quizLen){
                        //FINALISE

                         v.finalise=true;
                      }

                      v.setActiveQuestion();


                    }





                      function show(index){

                          v.activequestion=0;
                      //  v.btnActive=false;
                        //  v.getbyid=filterFilter(v.data.qList,{category:index});

                   }

           function finaliseAnswers(){
            v.activequestion=0;
            numQuestionsAnswered=0;
            Quizfact.Marks();

           }


                }
})();
