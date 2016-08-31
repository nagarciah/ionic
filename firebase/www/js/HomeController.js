angular.module('app')
.controller('HomeController', function($scope, RepositoryService){
  $scope.questions = RepositoryService.questions;  
});
