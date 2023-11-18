import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
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
}
