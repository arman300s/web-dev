import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {InfoService} from '../info.service';
import {ProductInfo} from '../product-info';
import {ProductInfoComponent} from '../product-info/product-info.component';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  infoService = inject(InfoService);
  productInfo: ProductInfo | undefined;
  constructor() {
    const productId = Number(this.route.snapshot.params['id']);
    this.productInfo = this.infoService.getProductById(productId);
  }
}
