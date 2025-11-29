import { TitleCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  imageUrl = input<string | null>(null);
  title = input.required<string>();
  routePath = input.required<string>();
  id = input.required<number>();

}
