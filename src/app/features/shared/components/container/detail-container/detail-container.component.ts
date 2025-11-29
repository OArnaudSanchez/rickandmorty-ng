import { Component, input } from '@angular/core';

@Component({
  selector: 'app-detail-container',
  imports: [],
  templateUrl: './detail-container.component.html',
  styleUrl: './detail-container.component.css'
})
export class DetailContainerComponent {

  title = input.required<string>();
  imageUrl = input<string | null>(null);
}
