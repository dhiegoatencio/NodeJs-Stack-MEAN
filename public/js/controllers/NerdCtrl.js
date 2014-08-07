angular.module('NerdCtrl', [])
    .controller('NerdController', ['$scope', 'Nerd', function($scope, Nerd){


	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';

    $scope.nerds = Nerd.get();

/*
=     [
        {
            "nome": "Hendrix", 
            "sobrenome": "Dhiego"
        }, 
        {
            "nome": "Nei", 
            "sobrenome": "Dias"
        }];*/

}]);