import { Component, OnInit, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services
import { HomeService } from '@services/home.service';
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
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.homeService.getAlbumsApi().subscribe((data: Array<Album>) => {
      this.dataAlbums.set(data);
    });
  }

}
