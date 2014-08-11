angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd){

	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';
    $scope.nerd = {};

    Nerd.get().success(function(data, status, headers, config) {
        $scope.nerds = data;
    }).error(function(data, status, headers, config) {
        $scope.tagline = 'Houve um erro ao carregar a lista de NERDS';
    });;

    $scope.salvar = function() {
    	Nerd.create($scope.nerd).success(function(data, status, headers, config) {
    		$scope.nerds.unshift($scope.nerd); //Add o nerd no começo da lista
            $scope.nerd = "";
    	}).error(function(){
            $scope.tagline = "Erro ao gravar nerd";
        });
    };

}]);