// Pseudo app.
angular
  .module('ng1', [])
  .component('ngApp1', {
    bindings: {
      hero: '@'
    },
    controller: function() {
      console.log('This is my "'+ this.hero +'" controller from AngularJS.');
    },
    template: '<h1>Hi, {{$ctrl.hero}}!</h1>'
  });


// Bootstrap.
angular.element(document).ready(function() {
  angular.bootstrap(document, ['ng1']);
});