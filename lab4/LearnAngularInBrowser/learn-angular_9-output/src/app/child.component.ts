import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class ChildComponent {
  addItem() {
    this.addItemEvent.emit('🐢')
  }
  @Output() addItemEvent = new EventEmitter<string>();
}
