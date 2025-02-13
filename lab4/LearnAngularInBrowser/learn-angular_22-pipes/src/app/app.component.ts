import {Component} from '@angular/core';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | uppercase }}
  `,
  imports: [UpperCasePipe],
})
export class AppComponent {
  username = 'yOunGTECh';
  loudMessage = 'we think you are doing great!'
}
