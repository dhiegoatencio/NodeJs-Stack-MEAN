angular.module('NerdCtrl', []).controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd, focus){

	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';
    $scope.nerd = {};

    Nerd.get().success(function(data, status, headers, config) {
        $scope.nerds = data;
    }).error(function(data, status, headers, config) {
        $scope.tagline = 'Houve um erro ao carregar a lista de NERDS';
    });;

    $scope.salvar = function() {
        if ($scope.nerd != "") {
        	Nerd.create($scope.nerd).success(function(data) {
                $scope.nerds.push($scope.nerd); //Add o nerd no começo da lista
                $scope.nerd = "";
        	}).error(function(){
                $scope.tagline = "Erro ao gravar nerd";
            });
        };
    };

    $scope.pesquisar = function(){
        Nerd.pesquisa($scope.nerd).success(function(data){
            $scope.nerds = data;
            $scope.nerd = ""; // limpa o campo de pesquisa
        });
    };

    $scope.delete = function(arrayIndex) {
        var idNerd = $scope.nerds[arrayIndex]._id;

        Nerd.delete(idNerd).success(function() {
            $scope.nerds.splice(arrayIndex, 1);
        });
    };

}]);