import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductInfo} from '../product-info';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-product-info',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent {
  @Input() productInfo!: ProductInfo;
  protected readonly encodeURIComponent = encodeURIComponent;

  getWhatsAppShareUrl(link: string, productName: string): string {
    if (!link) return '';
    return `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + productName + ' - ' + link)}`;
  }

  getTelegramShareUrl(link: string, productName: string): string {
    if (!link) return '';
    return `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('Check out this product: ' + productName)}`;
  }
}
