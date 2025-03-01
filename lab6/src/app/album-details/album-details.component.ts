import { Component } from '@angular/core';
import {Album} from '../../../models';
import {AlbumsService} from '../albums.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-album-details',
  imports: [
    NgIf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent {
  album!: Album;
  loaded: boolean;
  isEditing: boolean;
  editedTitle: string = '';

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService, private router: Router) {
    this.loaded = false;
    this.isEditing = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const albumID: number = Number(params.get('id'));

      this.loaded = false;

      this.albumsService.getAlbum(albumID).subscribe((album: Album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loaded = true;
      })
    })
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
  editTitle() {
    this.isEditing = true;
  }
  saveTitle() {
    this.album.title = this.editedTitle;
    this.isEditing = false;
  }
}
