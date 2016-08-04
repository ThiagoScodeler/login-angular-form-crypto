'use strict';

angular.module('Login')

.factory('LoginService', ['$http', '$cookieStore', '$rootScope', '$timeout','$localStorage',
function ($http, $cookieStore, $rootScope, $timeout,$localStorage) {

  var service = {};

  service.Login = function (username, password, callback) {

    /* default login validation just to simulate the user logged in.
    The proper implementation is to use a api call to authenticate the username / password
    */

    $timeout(function () {
      var response = { success: username === 'admin' && password === 'admin' };
      if (!response.success) {
        response.message = 'Username or Password is incorrect';
      }
      callback(response);
    }, 1000);
  };

  service.SetCredentials = function (username, password) {

  var authdata = CryptoJS.AES.encrypt(username + ':' + password, 'passphrase').toString();

    $rootScope.globals = {
      currentUser: {
        username: username,
        authdata: authdata
      }
    };

    $http.defaults.headers.common['Login'] = 'Basic ' + authdata;
    $cookieStore.put('globals', $rootScope.globals);
  };

  service.ClearCredentials = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Login = 'Basic ';
    $localStorage.$reset();
  };

  return service;
}])
