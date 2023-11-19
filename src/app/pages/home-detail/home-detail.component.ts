import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  WritableSignal,
  signal,
} from '@angular/core';
// Services components
import { CardService } from 'app/shared/components/card/services/card-detail.service';
// Services
import { HomeService } from '@services/home.service';
// Interfaces
import { Track } from '@models/track';
// Components
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-home-detail',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home-detail.component.html',
  styleUrl: './home-detail.component.scss',
})
export class HomeDetailComponent implements OnInit {
  @Input() id = '';

  public dataAlbum: WritableSignal<Array<Track>> = signal([]);
  public title: WritableSignal<any> = signal('');

  constructor(
    private homeService: HomeService,
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.title.set(this.cardService.get().title);

    if (this.id) {
      this.getAlbum(this.id);
    }
  }

  getAlbum(id: string) {
    this.homeService.getAlbumApi(id).subscribe((data: Array<Track>) => {
      this.dataAlbum.set(data);
    });
  }
}
