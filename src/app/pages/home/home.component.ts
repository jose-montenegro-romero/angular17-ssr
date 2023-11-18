import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
// Services
import { HomeService } from '@services/home.service';
import { SpotifyAuthService } from '@services/spotify/spotifyAuth.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardDetailComponent } from '../../shared/components/card-detail/card-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public dataAlbums: WritableSignal<Array<Album>> = signal([]);

  constructor(
    private homeService: HomeService,
    private spotifyAuthService: SpotifyAuthService
  ) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getToken();
  }

  getAlbums(): void {
    this.homeService.getAlbumsApi().subscribe((data: Array<Album>) => {
      console.log(data);
      this.dataAlbums.set(data);
    });
  }

  getToken(): void {
    // this.spotifyAuthService.getAccessToken().subscribe((token: string) => {
    //   console.log(token);
    // });
  }
}
