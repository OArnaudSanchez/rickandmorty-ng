import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationModel } from '../../../models/navigation.model';

@Component({
  selector: 'app-navbar-navigation-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-navigation-options.component.html',
  styleUrl: './navbar-navigation-options.component.css'
})
export class NavbarNavigationOptionsComponent {

  navigationOptions = input.required<NavigationModel[]>();

}
