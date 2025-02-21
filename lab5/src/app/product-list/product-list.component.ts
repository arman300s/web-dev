import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductItemComponent} from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  categories = [
    { name: 'Smartphones' },
    { name: 'Household Appliances' },
    { name: 'Headphones' },
    { name: 'Laptops' }
  ];  products = [
    {
      id: 1,
      name: 'Iphone 16',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/iphone16.jpeg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 2,
      name: 'Iphone 15',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/iphone15.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 3,
      name: 'Iphone 14',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/iphone14.jpeg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 4,
      name: 'Iphone 13',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/iphone13.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 5,
      name: 'Iphone 12',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/iphone12.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000',
      category: 'Smartphones',
      likes: 0,
    },
    {
      id: 6,
      name: 'BEREKE BR-810',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/berekebr810.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000',
      category: 'Household Appliances',
      likes: 0,
    },
    {
      id: 7,
      name: 'Yingzheng',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/yinzheng.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
      category: 'Household Appliances',
      likes: 0,
    },
    {
      id: 8,
      name: 'ZY-303',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/zy303.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-zy-303-chernyi-serebristyi-107912987/?c=750000000',
      category: 'Household Appliances',
      likes: 0,
    },
    {
      id: 9,
      name: 'TriTower',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/tritower.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-tritower-x8t-chernyi-112338470/?c=750000000',
      category: 'Household Appliances',
      likes: 0,
    },
    {
      id: 10,
      name: 'Vitek',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/vitek.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/elektrochainik-vitek-vt-7056-chernyi-6301743/?c=750000000',
      category: 'Household Appliances',
      likes: 0,
    },
    {
      id: 11,
      name: 'airPods 3',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/airpods3.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      category: 'Headphones',
      likes: 0,
    },
    {
      id: 12,
      name: 'airPodsPro 2',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/airpodspro2.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000',
      category: 'Headphones',
      likes: 0,
    },
    {
      id: 13,
      name: 'airPods 4',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/airpods4.jpeg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000',
      category: 'Headphones',
      likes: 0,
    },
    {
      id: 14,
      name: 'earPods',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/earpods.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
      category: 'Headphones',
      likes: 0,
    },
    {
      id: 15,
      name: 'airPods',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/airpods.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-airpods-with-charging-case-belyi-4804056/?c=750000000',
      category: 'Headphones',
      likes: 0,
    },
    {
      id: 16,
      name: 'MacBook Air 13',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/macbookair13.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 17,
      name: 'MacBook Pro 14',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/macbookpro14.jpeg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-24-gb-ssd-512-gb-macos-mx2h3-132140624/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 18,
      name: 'MacBook Pro 16',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/macbookpro16.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-16-gb-ssd-512-gb-macos-mk183-102892102/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 19,
      name: 'iMac 24',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/imac24.jpg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-imac-24-mqrt3-rozovyi-114840579/?c=750000000',
      category: 'Laptops',
      likes: 0,
    },
    {
      id: 20,
      name: 'macMini',
      description: 'Lorem ipsum dolor',
      imageUrl: 'assets/images/macmini.jpeg',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/apple-mac-mini-2024-mu9d3-serebristyi-130865129/?c=750000000',
      category: 'Laptops',
      likes: 0,
    }
  ]
  selectedCategory = '';

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getSelectedCategoryProducts() {
    if (this.selectedCategory === '') {
      return [];
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }


  removeProduct(id : number){
    var newProducts = []
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id !== id){
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
  }

  likeProduct(id : number){
    for(var i = 0; i < this.products.length;i++){
      if(this.products[i].id === id){
        this.products[i].likes += 1;
      }
    }
  }

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
