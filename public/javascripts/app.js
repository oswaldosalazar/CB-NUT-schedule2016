var app = angular.module('cbaNutApp',['ngRoute', 'ngMaterial']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'partials/home.html'
    })
    .when('/performances', {
        templateUrl: 'partials/performances.html'
    })
    $locationProvider.html5Mode(true);
});
