import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductInfoComponent} from '../product-info/product-info.component';
import {ProductInfo} from '../product-info';
import {InfoService} from '../info.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductInfoComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productInfoList: ProductInfo[] = [];
  infoService: InfoService = inject(InfoService);

  constructor() {
    this.productInfoList = this.infoService.getProductInfo();
  }

}
