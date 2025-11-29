import { DatePipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ContainerComponent } from "src/app/features/shared/components/container/container.component";
import { HideUrlPipe } from 'src/app/features/shared/pipes/hide-url.pipe';
import { Location } from '../../models/location.model';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-location-detail',
  imports: [ContainerComponent, RouterLink, HideUrlPipe, DatePipe],
  templateUrl: './location-detail.component.html',
  styleUrl: './location-detail.component.css'
})
export class LocationDetailComponent implements OnInit{

  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly locationService = inject(LocationService);

  protected locationId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';

  location = signal<Location | null>(null);

  ngOnInit(){
    this.locationService.getLocation(this.locationId)
    .subscribe({
      next: locationData => {
        this.location.set(locationData);
      }
    });
  }

  get residentsLength(){
    return this.location()?.residents.length ?? 0;
  }

}
