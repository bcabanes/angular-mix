import {UpgradeAdapter} from 'angular2/upgrade';

import myComponent from './myComponent.js';
import {AnotherComponent} from './anotherComponent.js';
console.log(AnotherComponent);
const upgradeAdapter = new UpgradeAdapter();

// Pseudo app.
export default angular
  .module('myApp', [])
  .component('myComponent', myComponent)
  .directive('anotherComponent', upgradeAdapter.downgradeNg2Component(AnotherComponent));


// Bootstrap v1.
//angular.element(document).ready(function() {
//  angular.bootstrap(document, ['myApp']);
//});
// Bootstrap upgrade.
upgradeAdapter.bootstrap(document.documentElement, ['myApp']);