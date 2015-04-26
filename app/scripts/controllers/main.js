'use strict';

/**
 * @ngdoc function
 * @name ekConsumerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ekConsumerApp
 */
angular.module('ekConsumerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
