import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  @if (isServerRunning) {
    <span>Yes, the server is running</span> 
  }
  @else {
  <span>No, server is not running </span>
  }
  `,
})
export class AppComponent {
  isServerRunning = false;
}
