angular.module('passportApp', ['ngRoute', 'appRoutes',
	'Service',
	'MainCtrl',
	'LoginCtrl',
	'RegisterCtrl'
]);


angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/passport/login.html',
			controller: 'LoginController'
		})

		// nerds page that will use the NerdController
		.when('/registrar', {
			templateUrl: 'views/passport/register.html',
			controller: 'RegisterController'
		})


		.otherwise ({ redirectTo: '/' });

	$locationProvider.html5Mode(true);

}]);