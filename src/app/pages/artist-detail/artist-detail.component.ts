import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  Input,
  WritableSignal,
  afterNextRender,
  signal,
} from '@angular/core';
// Models
import { IArtist } from '@models/artist';
// Services
import { HomeService } from '@services/home.service';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './artist-detail.component.html',
  styleUrl: './artist-detail.component.scss',
})
export class ArtistDetailComponent {
  @Input() id = '';
  public artist: WritableSignal<IArtist> = signal({
    images: [],
  } as IArtist);

  constructor(private homeService: HomeService) {
    afterNextRender(() => {
      this.getArtist(this.id);
    });
  }

  getArtist(id: string) {
    this.homeService.getArtistApi(id).subscribe((data: IArtist) => {
      this.artist.set(data);
    });
  }
}
