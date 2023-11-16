import { Component, Input, OnInit, Signal, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// Services components
import { CardService } from 'app/shared/components/card/services/card-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Photo } from '@models/photo';
// Components
import { CardDetailComponent } from 'app/shared/components/card-detail/card-detail.component';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [CommonModule, CardDetailComponent],
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.scss'
})
export class HomeDetailComponent implements OnInit {

  @Input() id = '';

  public dataAlbum: WritableSignal<Array<Photo>> = signal([]);
  public title: WritableSignal<any> = signal("");

  constructor(
    private homeService: HomeService,
    private cardService: CardService
  ) { }

  ngOnInit(): void {

    this.title.set(this.cardService.get().title);

    if (this.id) {
      this.getAlbum(this.id);
    }
  }

  getAlbum(id: string) {
    this.homeService.getAlbumApi(id).subscribe((data: Array<Photo>) => {
      this.dataAlbum.set(data);
    });
  }

}
