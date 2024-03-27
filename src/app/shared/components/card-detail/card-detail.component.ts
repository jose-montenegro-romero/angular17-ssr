import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  InputSignal,
  Output,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.scss',
})
export class CardDetailComponent {
  public id: InputSignal<string> = input.required<string>();
  public urlImage: InputSignal<string> = input.required<string>();
  public url: InputSignal<string> = input.required<string>();
  public title: InputSignal<string> = input.required<string>();
  public priorityImage: InputSignal<boolean> = input<boolean>(false);

  @Output() redirectUrl: EventEmitter<{ title: string; id: string }> =
    new EventEmitter<{ title: string; id: string }>();

  redirectRouterLink() {
    this.redirectUrl.emit({ title: this.title(), id: this.id() });
  }
}
