(function(){



angular.module("quizApp", ['ngRoute'])

.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			//controller: ' listCtrl',
			//controllerAs: 'list'
		})
		.when('/Quiz', {
			templateUrl: 'views/Quiz.html',
			//controller: 'StudentController'
		})
		.when('/result', {
			templateUrl: 'views/results.html',
			//controller: 'StudentController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});
})();
