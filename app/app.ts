import myComponent from './myComponent.js';

// Pseudo app.
export default angular
  .module('myApp', [])
  .component('myComponent', myComponent);


// Bootstrap.
angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});