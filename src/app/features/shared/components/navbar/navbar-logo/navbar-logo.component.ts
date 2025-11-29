import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-logo',
  imports: [RouterLink],
  templateUrl: './navbar-logo.component.html',
  styleUrl: './navbar-logo.component.css'
})
export class NavbarLogoComponent {

  protected imageUrl = "https://koradiproductions.com/wp-content/uploads/2021/06/rick-and-morty-silueta.jpg";

}
