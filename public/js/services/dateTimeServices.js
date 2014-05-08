'use strict';

angular.module('astralinkApp.dateTimeServices', []).
    factory('dateTimeServices', function () {
    return {
        //add zeroes
        hourPadLeft: function (string) {
            if (string < 10){
                return '0' + string;
            }else{
                return string;
            }
        }
    };

});