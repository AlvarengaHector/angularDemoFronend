'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

//factory
.factory('Customer', function($resource){
    return $resource('http://localhost:8080/angularDemoBackend/rs/customer', {}, {
        findAll:{method:'GET', isArray:true}
    });
});
