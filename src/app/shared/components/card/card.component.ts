import { CommonModule } from '@angular/common';
import { Component, InputSignal, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public id: InputSignal<string> = input.required<string>();
  public title: InputSignal<string> = input.required<string>();
  public urlMp3: InputSignal<string> = input.required<string>();
}
