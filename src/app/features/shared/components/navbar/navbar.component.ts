import { Component, inject } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { NavbarLogoComponent } from "./navbar-logo/navbar-logo.component";
import { NavbarNavigationOptionsComponent } from "./navbar-navigation-options/navbar-navigation-options.component";

@Component({
  selector: 'app-navbar',
  imports: [NavbarLogoComponent, NavbarNavigationOptionsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private readonly navbarService = inject(NavbarService);
  protected navigationOptions = this.navbarService.navigationOptions;

}
