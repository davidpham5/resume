'use strict';

describe('Service: workExp', function () {

  // load the service's module
  beforeEach(module('pham6App'));

  // instantiate service
  var workExp;
  beforeEach(inject(function (_workExp_) {
    workExp = _workExp_;
  }));

  it('should do something', function () {
    expect(!!workExp).toBe(true);
  });

});
