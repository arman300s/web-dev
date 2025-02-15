import { Injectable } from '@angular/core';
import {ProductInfo} from './product-info';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  protected productInfoList: ProductInfo[] = [
    {
      id: 1,
      name: 'Iphone 13',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/iphone13.jpg',
      linkUrl:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 2,
      name: 'Iphone 15',
      description: 'smartphone',
      rating: 9,
      photoUrl: '/assets/iphone15.jpg',
      linkUrl:'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000'
    },
    {
      id: 3,
      name: 'Iphone 16',
      description: 'smartphone',
      rating: 2,
      photoUrl: '/assets/iphone16.jpeg',
      linkUrl:'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      id: 4,
      name: 'Oppo',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/oppo.jpg',
      linkUrl:'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000'
    },
    {
      id: 5,
      name: 'Realme',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/realme.jpg',
      linkUrl:'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000'
    },
    {
      id: 6,
      name: 'Realme Note',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/realmenote.jpeg',
      linkUrl:'https://kaspi.kz/shop/p/realme-note-50-4-gb-128-gb-chernyi-116138550/?c=750000000'
    },
    {
      id: 7,
      name: 'Samsung A 55',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/samsung55.jpeg',
      linkUrl:'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-128-gb-temno-sinii-117420239/?c=750000000'
    },
    {
      id: 8,
      name: 'Samsung S 24',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/samsungs24.jpeg',
      linkUrl:'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000'
    },
    {
      id: 9,
      name: 'Xiaomi',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/xiaomi.jpg',
      linkUrl:'https://kaspi.kz/shop/p/xiaomi-redmi-a3-4-gb-128-gb-chernyi-116932148/?c=750000000'
    },
    {
      id: 10,
      name: 'Samsung A25',
      description: 'smartphone',
      rating: 10,
      photoUrl: '/assets/samsunga25.jpg',
      linkUrl:'https://kaspi.kz/shop/p/samsung-galaxy-a35-5g-8-gb-128-gb-sirenevyi-117420481/?c=750000000'
    },

  ];


  getProductInfo(): ProductInfo[] {
    return this.productInfoList;
  }
  getProductById(id: number): ProductInfo | undefined {
    return this.productInfoList.find((productInfo) => productInfo.id === id);
  }
}
