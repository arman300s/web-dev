import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @for (user of users; track user.id) {
  <p> {{ user.name }}</p>
  }
  `,
})
export class AppComponent {
  users = [{id: 0, name: 'Curry'}, {id:1, name: 'Anthony'}, {id: 2, name: 'Murat'}, {id: 4, name: 'Poornima'}]
}
