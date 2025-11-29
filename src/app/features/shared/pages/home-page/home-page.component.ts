import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  private readonly navbarService = inject(NavbarService);
  protected navigationOptions = this.navbarService.navigationOptions.filter(option => option.path !== '/');
}
