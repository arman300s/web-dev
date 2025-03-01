import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-album-photos',
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos: any[] = [];
  albumId!: number;
  loaded = false;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));

    this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums/${this.albumId}/photos`)
      .subscribe(data => {
        this.photos = data;
        this.loaded = true;
      });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

}
