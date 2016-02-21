var myComponent = {
  bindings: {
  hero: '@'
},
controller: function() {
  console.log('This is my "'+ this.hero +'" controller from AngularJS.');
},
template: '<h1>Hi, {{$ctrl.hero}}!</h1>'
};

export default myComponent;