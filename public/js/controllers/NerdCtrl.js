angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd, focus){

	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';
    $scope.nerd = {};

    Nerd.get().success(function(data, status, headers, config) {
        $scope.nerds = data;
    }).error(function(data, status, headers, config) {
        $scope.tagline = 'Houve um erro ao carregar a lista de NERDS';
    });;

    $scope.salvar = function() {
    	Nerd.create($scope.nerd).success(function(data) {
    		$scope.nerds.push($scope.nerd); //Add o nerd no começo da lista
            $scope.nerd = "";
            focus('nome');
    	}).error(function(){
            $scope.tagline = "Erro ao gravar nerd";
        });
    };

    $scope.delete = function(idx) {
        var idNerd = $scope.nerds[idx]._id;

        Nerd.delete(idNerd).success(function() {
            $scope.nerds.splice(idx, 1);
        });
    };

}]);