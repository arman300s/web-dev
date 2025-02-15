import { Component } from '@angular/core';
import {ProductsComponent} from './products/products.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, RouterModule],
  template: `
    <main>
      <header class="header">
        <img src="./assets/123.svg" alt="Kaspi.kz Logo" class="logo">
        <nav class="nav">
          <a href="#">Клиентам</a>
          <a href="#">Бизнесу</a>
          <a href="#">Kaspi Гид</a>
        </nav>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task Two';
}
