describe('Login.service service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Login.service) {
    expect(Login.service.getData()).toEqual(3);
  }));
});
