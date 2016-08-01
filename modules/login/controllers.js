'use strict';

angular.module('Login')

.controller('LoginController', ['$scope', '$rootScope', '$location', 'LoginService',
function ($scope, $rootScope, $location, LoginService) {

  // reset status login
  LoginService.ClearCredentials();

  $scope.login = function () {
    LoginService.Login($scope.username, $scope.password, function (response) {
      if (response.success) {
        LoginService.SetCredentials($scope.username, $scope.password);
        $location.path('/');
      } else {
        $scope.error = response.message;
      }
    });
  };
}]);
