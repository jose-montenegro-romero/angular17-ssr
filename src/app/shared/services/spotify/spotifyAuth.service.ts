import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// Environments
import { environment } from '@environments/environment';
import { Observable, map } from 'rxjs';

interface IAuth {
  access_token: string;
  token_type: string;
  expires_in: number;
}

@Injectable()
export class SpotifyAuthService {
  constructor(private httpclient: HttpClient) {}

  getAccessToken(): Observable<string> {
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
      Authorization: '',
    });

    return this.httpclient
      .post<IAuth>(url, encodedBody, { headers: httpHeaders })
      .pipe(
        map((response: IAuth) => {
          return response?.access_token;
        })
      );
  }
}
