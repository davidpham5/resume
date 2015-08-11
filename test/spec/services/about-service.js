'use strict';

describe('Service: aboutService', function () {

  // load the service's module
  beforeEach(module('pham6App'));

  // instantiate service
  var aboutService;
  beforeEach(inject(function (_aboutService_) {
    aboutService = _aboutService_;
  }));

  it('should do something', function () {
    expect(!!aboutService).toBe(true);
  });

});
