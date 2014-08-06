angular.module('NerdCtrl', []).controller('NerdController', function($scope) {

	$scope.tagline = 'Esta mensagem NERD, está vindo do arquivo NerdController.js';

    $scope.nerds = [
        {
            "nome": "Hendrix", 
            "sobrenome": "Dhiego"
        }, 
        {
            "nome": "Nei", 
            "sobrenome": "Dias"
        }];
});