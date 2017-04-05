angular
  .module('app')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });

/** @ngInject */
function TechsController($scope, $firebaseArray) {
  var vm = this;

}
