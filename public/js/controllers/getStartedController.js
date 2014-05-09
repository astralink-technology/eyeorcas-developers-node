'use strict';

/* Controllers */
angular.module('eyeorcasDevelopersApp.getStartedController', []).
  controller('getStartedController', ['$scope', '$http', function ($scope, $http) {
        $('body').scrollspy({
            target: '#sidebar',
            offset: 40
        });

    }]);