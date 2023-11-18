import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
// Services
import { CardService } from './services/card-detail.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) urlMp3: string = '';

  constructor(private Router: Router, private cardService: CardService) {}

  setRoute(id: string, title: string): void {
    this.cardService.set({ id: id.toString(), title });
    this.Router.navigateByUrl(`/${id}`);
  }
}
