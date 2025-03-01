import {Component, OnInit} from '@angular/core';
import {Album} from '../../../models';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AlbumsService} from '../albums.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.albumsService.getAlbums().subscribe((albums: Album[]) => {
      this.albums = albums;
    })
  }

  deleteAlbum(albumId: number) {
    if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(albumId).subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== albumId);
      });
    }
  }
}
