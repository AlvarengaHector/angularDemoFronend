'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

//controllers
.controller('View1Ctrl', function ($scope, Customer) {
    $scope.allCustomers = Customer.findAll();
    $scope.showDetails = function(customer){
        $scope.selectedCustomer = customer;
    };
});

