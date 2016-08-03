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

  service.Decryption = function (decryptionInfo, callback) {
    $timeout(function () {
      var decrypted = CryptoJS.AES.decrypt(decryptionInfo, 'passphrase')
      var plaintext = decrypted.toString(CryptoJS.enc.Utf8);
      callback(plaintext);
    }, 1000);
  };

  return service;
}])
