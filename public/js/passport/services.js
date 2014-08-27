angular.module('Service', []).factory('Svc', ['$http', function($http) {

	return {

		login : function(user) {
			return $http.post('/api/login', user);
		},

		registrar : function(user) {
			return $http.post('/api/signup', user);
		}
	}		

}]);