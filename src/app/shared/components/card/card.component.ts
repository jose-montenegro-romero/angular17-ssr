import { Component, Inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// Services
import { CardService } from './services/card-detail.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input({ required: true }) id: number = 0;
  @Input({ required: true }) title: string = "";

  constructor(
    private Router: Router,
    private cardService: CardService
  ) { }

  setRoute(id: number, title: string): void {
    this.cardService.set({ id: id.toString(), title });
    this.Router.navigateByUrl(`/${id}`);
  }
}
