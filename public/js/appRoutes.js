angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		// nerds page that will use the NerdController
		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})


		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController'
		})

		// 
		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'	
		})

		.otherwise ({ redirectTo: '/' });

	$locationProvider.html5Mode(true);

}]);