import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'more-details',
  imports: [RouterLink],
  templateUrl: './more-details.component.html',
  styleUrl: './more-details.component.css'
})
export class MoreDetailsComponent {

  path = input.required<string>();
  id = input.required<number>();

  get fullPath(){
    return `/${this.path()}/${this.id()}`;
  }

}
