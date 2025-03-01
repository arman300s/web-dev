import { Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {AlbumsComponent} from './albums/albums.component';
import {AlbumDetailsComponent} from './album-details/album-details.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';

export const routes: Routes = [
  {path:'about', component: AboutComponent, title:'About'},
  {path:'home', component: HomeComponent, title: 'Home'},
  {path:'albums', component: AlbumsComponent, title: 'Albums'},
  {path: 'albums/:id', component: AlbumDetailsComponent, title: 'Album Details'},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent, title: 'Photo'},
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
];
