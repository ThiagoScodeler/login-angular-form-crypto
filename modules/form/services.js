'use strict';

angular.module('Form')

.factory('FormService', ['$rootScope', '$timeout','$localStorage', function ($rootScope, $timeout,$localStorage) {

  var service = {};

  service.Encryption = function (encryptionInfo, callback) {
    $timeout(function () {
      /* to provide more protection is possible to request to the user a personal passphrase
        instead to use a default value 'passphrase' as the implementation below
      */
      var encrypted = CryptoJS.AES.encrypt(encryptionInfo, 'passphrase').toString()
      $localStorage.key = encrypted;
      callback(encrypted);
    }, 1000);
  };

  service.Decryption = function (decryptionInfo, callback) {
    $timeout(function () {
      var decryptedAux = CryptoJS.AES.decrypt(decryptionInfo, 'passphrase')
      var decrypted = decryptedAux.toString(CryptoJS.enc.Utf8);
      callback(decrypted);
    }, 1000);
  };

  return service;
}])
