import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class ArtistDetailComponent implements OnInit {
  @Input() id = '';
  public artist: IArtist = {
    images: [],
  };

  constructor(private homeService: HomeService) {
    // afterNextRender(() => {
    // this.getArtist(this.id);
    // });
  }

  ngOnInit(): void {
    this.getArtist(this.id);
  }

  getArtist(id: string) {
    this.homeService.getArtistApi(id).subscribe((data: IArtist) => {
      this.artist = data;
    });
  }
}
