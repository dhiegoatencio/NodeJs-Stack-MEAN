angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd){

	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';

    Nerd.get().success(function(data, status, headers, config) {
        $scope.nerds = data;
    }).error(function(data, status, headers, config) {
        $scope.tagline = 'Houve um erro ao carregar a lista de NERDS';
        
    });;
}]);