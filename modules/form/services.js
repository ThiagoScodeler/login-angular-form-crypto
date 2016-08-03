'use strict';

angular.module('Form')

.factory('FormService', ['$rootScope', '$timeout',function ($rootScope, $timeout) {

  var service = {};

  service.Encryption = function (encryptionInfo, callback) {

    $timeout(function () {
      var encrypted = CryptoJS.AES.encrypt(encryptionInfo, 'passphrase').toString()
      callback(encrypted);
    }, 1000);
  };

  return service;
}])
