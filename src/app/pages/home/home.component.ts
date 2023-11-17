import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
// Services
import { HomeService } from '@services/home.service';
import { SpotifyService } from '@services/spotify/spotify.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardComponent } from 'app/shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public dataAlbums: WritableSignal<Array<Album>> = signal([]);

  constructor(
    private homeService: HomeService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.getAlbums();
    this.getToken();
  }

  getAlbums(): void {
    this.homeService.getAlbumsApi().subscribe((data: Array<Album>) => {
      this.dataAlbums.set(data);
    });
  }

  getToken(): void {
    this.spotifyService.getAccessToken().subscribe((data) => {
      console.log(data);
    });
  }
}
