(function(){



  angular
        .module("quizApp")
        .factory("Quizfact", QuizFact)
       QuizFact.$inject=['DataService','filterFilter','$interval','$window','$timeout'];
        function QuizFact(DataService,filterFilter,$interval,$window,$timeout){
          var quizObj={
           correctAnswers:[],
           databyid:[],
           Marks:Marks,
           getbyid:getbyid,
           numCorrect:0,
           testdata:0,
           total:0,
           time:0,
           start:start


         };

          return quizObj;



          var promisetime;
          var p;
           function start(){

          //  p=$timeout(function () {
          // window.alert("Is it Difficult to Answer!");
        // }, 10000);


            if(quizObj.time==0){


           promisetime=$interval(function () {
          quizObj.time++;

          }, 1000);





          }

          else {
          quizObj.time=0;


          }

          }

          function getbyid(id){
            quizObj.databyid=filterFilter(DataService.qList,{category:id});
          }


           function Marks(){
              $interval.cancel(promisetime);
              $timeout.cancel(p);
              quizObj.total=quizObj.databyid.length;
            // quizObj.correctAnswers=  databyid.correctAnswer;
             for(var i=0;i<quizObj.total;i++){
               if(quizObj.databyid[i].selected===quizObj.databyid[i].correctAnswer){
                 quizObj.databyid[i].correct=true;
                 quizObj.numCorrect++;
               }else {
                 quizObj.databyid[i].correct=false;


               }
             }

             



           }


        }


})();
