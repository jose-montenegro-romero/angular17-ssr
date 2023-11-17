import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// Interfaces
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable()
export class HomeService {
  constructor(private httpclient: HttpClient) {}

  getAlbumsApi(): Observable<Album[]> {
    return this.httpclient.get<Array<Album>>(
      'https://jsonplaceholder.typicode.com/albums'
    );
  }

  getAlbumApi(id: string): Observable<Photo[]> {
    return this.httpclient
      .get<Array<Photo>>('https://jsonplaceholder.typicode.com/photos')
      .pipe(
        map((response: Array<Photo>) => {
          const result: Array<Photo> = response.filter(
            (item: Photo) => item.albumId === Number(id)
          );
          return result;
        })
      );
  }

  // testBolivar(): Observable<any> {

  //   const httpHeaders: HttpHeaders = new HttpHeaders({
  //     "x-api-key": 'cful9vcGq41aH55gpwhewCP0PBDfOuBanQT0qx03'
  //   });

  //   return this.httpclient.post("https://d10d-152-203-205-33.ngrok-free.app/fee_managementapi/api/v1/fees", {
  //     "first": 0,
  //     "rows": 10,
  //     "sortOrder": -1,
  //     "sortField": "authorizationNumber",
  //     "analysts": null,
  //     "status": "",
  //     "search": "",
  //     "branch_id": 1
  //   }, { headers: httpHeaders });
  // }
}
