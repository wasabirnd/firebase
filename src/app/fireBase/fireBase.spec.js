describe('FireBase service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (FireBase) {
    expect(FireBase.getData()).toEqual(3);
  }));
});
