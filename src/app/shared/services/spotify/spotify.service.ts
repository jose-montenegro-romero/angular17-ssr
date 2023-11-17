import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable, map } from 'rxjs';
// Environments

@Injectable()
export class SpotifyService {
  constructor(private httpclient: HttpClient) {}

  getAccessToken(): Observable<any> {
    const url: string = 'https://accounts.spotify.com/api/token';

    const encodedBody = new HttpParams({
      fromObject: {
        grant_type: 'client_credentials',
        client_id: environment.spotifyClientId,
        client_secret: environment.spotifyClientSecret,
      },
    });

    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.httpclient
      .post(url, encodedBody, { headers: httpHeaders })
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        })
      );
  }
}
