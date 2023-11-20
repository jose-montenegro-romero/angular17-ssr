import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
})
export class CardDetailComponent {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) urlImage: string = '';
  @Input({ required: false }) url: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: false }) priorityImage: boolean = false;

  @Output() redirectUrl: EventEmitter<{ title: string, id: string }> = new EventEmitter<{ title: string, id: string }>();

  redirectRouterLink() {
    this.redirectUrl.emit({ title: this.title, id: this.id });
  }
}
