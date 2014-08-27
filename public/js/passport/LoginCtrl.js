angular.module('LoginCtrl', []).controller('LoginController',
        ['$scope', 'Svc', function($s, Svc){

    $s.user = "";

    $s.login = function() {
    	Svc.login($s.user).success(function() {
    		window.location.href = '/home';
        }).error(function(data, status, headers, config){
            $s.Alert('info', data);
        });
    };

}]);