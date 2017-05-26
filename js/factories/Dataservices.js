(function(){

   angular
        .module("quizApp")
        .factory("DataService",DataService);

        function DataService(){
          var dataObj={
            CatList:CatList,
            qList:qList
          };
          return dataObj;
        }




        var CatList=[
          {
            id:1,
            text:"Function or Method",
          },
          {
            id:2,
            text:"Class and Object",
          },
          {
            id:3,
            text:"Interface",
          },
          {
            id:4,
            text:"Inheritance",
          },
        ]







     var qList=[
       {
         text:"Which of these class is superclass of every class in Java",
         category:2,
         Possibilities:[
           {
             answer:"string class3"

           },
           {
             answer:"Object"

           },
           {
             answer:"Abstract"
           },
           {
             answer:"ArrayList class"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1

       },
       {
         text:"What is the return type of a method that does not returns any value ",
         category:1,
         Possibilities:[
           {
             answer:"int"

           },
           {
             answer:"float"

           },
           {
             answer:"void"
           },
           {
             answer:"double"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:3

       },
       {
         text:"Which of these class relies upon its subclasses for complete implementation of its methods",
         category:2,
         Possibilities:[
           {
             answer:"abstract class"

           },
           {
             answer:"Object class"

           },
           {
             answer:"ArrayList class"
           },
           {
             answer:"none of these"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1
       },
       {
         text:"Which of the following is a method having same name as that of it’s class ",
         category:1,
         Possibilities:[
           {
             answer:"finalize"

           },
           {
             answer:"delete"

           },
           {
             answer:"constructor "
           },
           {
             answer:"class"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:2

       },
       {
         text:"Which of these keywords cannot be used for a class which has been declared final",
         category:2,
         Possibilities:[
           {
             answer:"abstract"

           },
           {
             answer:"extends"

           },
           {
             answer:"abstract and extends"
           },
           {
             answer:"none of these"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:3
       },
       {
         text:"Which method can be defined only once in a program",
         category:1,
         Possibilities:[
           {
             answer:"main method"

           },
           {
             answer:"finalize method"

           },
           {
             answer:"static method"
           },
           {
             answer:"private method"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1

       },
       {
         text:"Which of these keyword must be used to inherit a class",
         category:4,
         Possibilities:[
           {
             answer:"super"

           },
           {
             answer:"extend"

           },
           {
             answer:"this"
           },
           {
             answer:"extends"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1
       },
       {
         text:"Which of these keywords is used to refer to member of base class from a sub class",
         category:4,
         Possibilities:[
           {
             answer:"upper"

           },
           {
             answer:"super"

           },
           {
             answer:"this"
           },
           {
             answer:"none of these"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1
       },
       {
         text:"A class member declared protected becomes member of subclass of which type",
         category:4,
         Possibilities:[
           {
             answer:"public member"

           },
           {
             answer:"private member"

           },
           {
             answer:"protected member"
           },
           {
             answer:"static member"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:3
       },
       {
         text:"Which of the following package stores all the standard java classes",
         category:3,
         Possibilities:[
           {
             answer:"lang"

           },
           {
             answer:"java"

           },
           {
             answer:"util"
           },
           {
             answer:"java.packages"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1
       },
       {
         text:"Which of these keywords is used by a class to use an interface defined previously",
         category:3,
         Possibilities:[
           {
             answer:"implement"

           },
           {
             answer:"import"

           },
           {
             answer:"Import"
           },
           {
             answer:"Implement"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:1
       },
       {
         text:"Which of these access specifiers can be used for an interface ",
         category:3,
         Possibilities:[
           {
             answer:"public"

           },
           {
             answer:"private"

           },
           {
             answer:"protected"
           },
           {
             answer:"all of these"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:2
       },

       {
         text:"Which of these keywords is used to define interfaces in Java",
         category:3,
         Possibilities:[
           {
             answer:"interface"

           },
           {
             answer:"InterFace"

           },
           {
             answer:"intf"
           },
           {
             answer:"IntF"
           }
         ],
         selected: null,
          correct: null,
          correctAnswer:2
       },



     ]

})();
