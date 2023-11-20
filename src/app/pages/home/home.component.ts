import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardDetailComponent } from '../../shared/components/card-detail/card-detail.component';
import { SpotifyAuthService } from '../../shared/services/spotify/spotifyAuth.service';

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
    // this.temp();
  }

  getAlbums(): void {
    this.homeService.getAlbumsApi().subscribe((data: Array<Album>) => {
      this.dataAlbums.set(data);
    });
  }

  // async temp() {
  //   const temp = await this.spotifyAuthService.getAccessToken();

  //   console.log(temp);
  // }
}
