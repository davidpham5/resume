'use strict';

describe('Controller: AboutControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('pham6App'));

  var AboutControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutControllerCtrl = $controller('AboutControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutControllerCtrl.awesomeThings.length).toBe(3);
  });
});
