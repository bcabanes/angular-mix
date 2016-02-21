import {Component, Input, OnInit} from 'angular2/core';

@Component({
  selector: 'another-component',
  template: `
    <h1>Hi {{hero}}, your enemy is <im>{{evil}}</im>.</h1>
    <small>You're an Angular2 component.</small>
  `
})
export class AnotherComponent implements OnInit {
  @Input() hero: string;
  @Input() evil: string;

  ngOnInit() {
    console.log('ng2 Component initialization');
  }
}