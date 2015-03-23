'use strict';

describe('Controller: SampleCtrl', function () {

  // load the controller's module
  beforeEach(module('drissApp'));

  var SampleCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleCtrl = $controller('SampleCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
