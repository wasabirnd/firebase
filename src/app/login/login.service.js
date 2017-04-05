function Login.service() {
}

Login.service.prototype.getData = function () {
  return 1 + 2;
};

angular
  .module('app')
  .service('Login.service', Login.service);

