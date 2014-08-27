angular.module('RegisterCtrl', []).controller('RegisterController',
        ['$scope', function($s, Svc){

    $s.user = "";

    $s.registrar = function() {
    	Svc.registrar($s.user).success(function() {
        }).error(function(data){
            $s.Alert('info', data);
        });
    };
}]);