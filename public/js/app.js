'use strict';

// Declare app level module which depends on filters, and services

angular.module('eyeorcasDevelopersApp', [
    'ngRoute'
    , 'duScroll'
    , 'ui.bootstrap'
    , 'eyeorcasDevelopersApp.landingController'
    , 'eyeorcasDevelopersApp.dateTimeServices'
    , 'eyeorcasDevelopersApp.validationServices'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

}]).
run(function($rootScope, $http){

});
