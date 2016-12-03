var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);

// routes
myApp.config(function($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});

// service
myApp.service('nameService', function(){

    var self  = this;
    this.name = 'John Doe';

    this.namelength = function(){

        return self.name.length;
    };

});

// controllers
myApp.controller('mainController', ['$scope', '$filter', '$http', '$location', '$log', 'nameService', function($scope, $filter, $http, $location, $log, nameService) {

    $scope.name = "jason";
    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);
myApp.controller('secondController', ['$scope', '$filter', '$routeParams',function($scope, $filter, $routeParams) {

    $scope.num = $routeParams.num || 1;
}]);