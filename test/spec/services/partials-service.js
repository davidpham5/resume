'use strict';

describe('Service: partialsService', function () {

  // load the service's module
  beforeEach(module('pham6App'));

  // instantiate service
  var partialsService;
  beforeEach(inject(function (_partialsService_) {
    partialsService = _partialsService_;
  }));

  it('should do something', function () {
    expect(!!partialsService).toBe(true);
  });

});
