import { CommonModule } from '@angular/common';
import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
// Services components
import { HomeDetailService } from '@services-components/home-detail/home-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Album } from '@models/album';
// Components
import { CardDetailComponent } from '../../shared/components/card-detail/card-detail.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardDetailComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public dataAlbums: WritableSignal<Array<Album>> = signal([]);

  constructor(
    private homeService: HomeService,
    private homeDetailService: HomeDetailService
  ) {}

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.homeService.getAlbumsApi().subscribe((data: Array<Album>) => {
      this.dataAlbums.set(data);
    });
  }

  redirectCardDetail(event: any): void {
    this.homeDetailService.set({ id: event.id, title: event.title });
  }
}
