import {Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;
