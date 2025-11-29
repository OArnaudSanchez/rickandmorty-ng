import { Component, inject } from '@angular/core';
import { CardInfoFieldComponent } from "src/app/features/shared/components/card/card-info-field/card-info-field.component";
import { CardComponent } from "src/app/features/shared/components/card/card.component";
import { MoreDetailsComponent } from 'src/app/features/shared/more-details/more-details.component';
import { ContainerComponent } from '../../../shared/components/container/container.component';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'location-page',
  imports: [
    ContainerComponent,
    MoreDetailsComponent,
    CardComponent,
    CardInfoFieldComponent
],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.css',
})
export class LocationPageComponent {
  private readonly locationService = inject(LocationService);
  locations = this.locationService.locations;
}
