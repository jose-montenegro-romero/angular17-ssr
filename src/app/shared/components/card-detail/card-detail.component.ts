import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss'
})
export class CardDetailComponent {

  @Input({ required: true }) id: number = 0;
  @Input({ required: true }) url: string = "";
  @Input({ required: true }) title: string = "";
}
