'use strict';

angular.module('drissApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sample', {
        url: '/sample',
        templateUrl: 'app/module/sample/sample.html',
        controller: 'SampleCtrl'
      });
  });