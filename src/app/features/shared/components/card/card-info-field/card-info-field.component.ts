import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-info-field',
  imports: [RouterLink],
  templateUrl: './card-info-field.component.html',
  styleUrl: './card-info-field.component.css'
})
export class CardInfoFieldComponent {

  label = input.required<string>();
  value = input.required<string | number | null>();
  link = input<string[]>();
  cssClass = input<string>('mt-1');
  hrefLink = input<string | null>();
}
