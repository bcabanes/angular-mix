var myComponent = {
  bindings: {
  hero: '@'
},
controller: function() {
  console.log('This is my "'+ this.hero +'" controller from AngularJS.');
},
template: '<h1>Hi, {{$ctrl.hero}}!</h1><small>You\'re an Angular1 component.</small>'
};

export default myComponent;