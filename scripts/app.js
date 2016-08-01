'use strict';

// modules
angular.module('Login', []);
angular.module('Form', []);
angular.module('angularCryptoExample', ['Login','Form','ngRoute','ngCookies'])

.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
  .when('/login', {
    controller: 'LoginController',
    templateUrl: 'modules/login/views/login.html'
  })

  .when('/', {
    controller: 'FormController',
    templateUrl: 'modules/form/views/form.html'
  })

  .otherwise({ redirectTo: '/login' });
}])

.run(['$rootScope', '$location', '$cookieStore', '$http', function ($rootScope, $location, $cookieStore, $http) {
  // keep user logged
  $rootScope.globals = $cookieStore.get('globals') || {};
  if ($rootScope.globals.currentUser) {
    $http.defaults.headers.common['Login'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
  }

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    // redirect to login page if user is not logged
    if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
      $location.path('/login');
    }
  });
}]);
