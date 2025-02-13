import {Component} from '@angular/core';
import {CommentsComponent} from './comments.component';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p> i dont like</p>
      </article>
      @defer (on viewport) {
  <comments />
    }  @placeholder {
  <p>Future comments</p>
    }  @loading (minimum 2s) {
  <p>Loading comments...</p>
}
    </div>
  `,
  imports: [CommentsComponent],
})
export class AppComponent {}
