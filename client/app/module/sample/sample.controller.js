'use strict';

angular.module('drissApp')
  .controller('SampleCtrl', function ($scope, $http) {
    $scope.sample = {
      name: ''
    };
    $scope.result = '';

    $scope.create = function(){
      $http.post('/api/samples',$scope.sample)
      .success(function(result){
        $scope.result = result;
      })
      .error(function(error){
        console.log(error);
      });
    };


  });
