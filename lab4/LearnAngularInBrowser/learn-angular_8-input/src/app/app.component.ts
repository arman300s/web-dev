import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user name = "Simran"></app-user>
  `,
  imports: [UserComponent],
})
export class AppComponent {}
