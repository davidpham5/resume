'use strict';

describe('Controller: LabCtrl', function () {

  // load the controller's module
  beforeEach(module('pham6App'));

  var LabCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LabCtrl = $controller('LabCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LabCtrl.awesomeThings.length).toBe(3);
  });
});
