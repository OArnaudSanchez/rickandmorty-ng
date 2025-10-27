import { Component, input } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  title = input.required<string>();
  subtitle = input<string>('');

}
