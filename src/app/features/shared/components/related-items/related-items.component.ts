import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HideUrlPipe } from '../../pipes/hide-url.pipe';

@Component({
  selector: 'app-related-items',
  imports: [RouterLink, HideUrlPipe],
  templateUrl: './related-items.component.html',
  styleUrl: './related-items.component.css'
})
export class RelatedItemsComponent {

  title = input.required<string>();
  items = input.required<string[]>();
  urlPath = input.required<string>();
}
