import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city}}, {{ 1+11}}
  `,
})
export class AppComponent {
  city = 'San Francisco'
}
