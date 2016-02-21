import {UpgradeAdapter} from 'angular2/upgrade';

import myComponent from './myComponent.js';

const upgradeAdapter = new UpgradeAdapter();

// Pseudo app.
export default angular
  .module('myApp', [])
  .component('myComponent', myComponent);


// Bootstrap v1.
//angular.element(document).ready(function() {
//  angular.bootstrap(document, ['myApp']);
//});
// Bootstrap upgrade.
upgradeAdapter.bootstrap(document.documentElement, ['myApp']);