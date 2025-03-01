import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Album} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }


  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getPhotos(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }
}
