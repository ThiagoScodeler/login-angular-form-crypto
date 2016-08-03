'use strict';

angular.module('Form')

.controller('FormController', ['$scope', '$rootScope','FormService',
function ($scope, $rootScope, FormService) {

  $scope.encryption = function () {
    FormService.Encryption($scope.encryptionInfo, function (response) {
        $scope.encryptionInfoResult = response;
    });
  };

  $scope.decryption = function () {
    FormService.Decryption($scope.decryptionInfo, function (response) {
        $scope.decryptionInfoResult = response;
    });
  };

}]);
