'use strict';

angular.module('Login')

.factory('LoginService', ['$http', '$cookieStore', '$rootScope', '$timeout',
function ($http, $cookieStore, $rootScope, $timeout) {

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

  var authdata = username + ':' + password);

    $rootScope.globals = {
      currentUser: {
        username: username,
        password: password
      }
    };

    $http.defaults.headers.common['Login'] = 'Basic ' + authdata;
    $cookieStore.put('globals', $rootScope.globals);
  };

  service.ClearCredentials = function () {
    $rootScope.globals = {};
    $cookieStore.remove('globals');
    $http.defaults.headers.common.Login = 'Basic ';
  };

  return service;
}])
