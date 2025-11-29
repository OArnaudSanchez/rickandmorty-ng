import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { map, Observable } from 'rxjs';
import { ApiResponse } from 'src/app/core/models/api-response.model';
import { LocationMapper } from '../mappers/location.mapper';
import { LocationResponse } from '../models/location-response.model';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private readonly httpClient = inject(HttpClient);
  locations = signal<Location[] | null>(null);

  constructor() {
    this.getLocations();
  }

  getLocations() {
    this.httpClient
      .get<ApiResponse<LocationResponse>>(`${environment.API_BASE_URL}/${environment.LOCATIONS_PATH}`)
      .subscribe({
        next: ({ results }) => {
          const mappedLocations = LocationMapper.mapLocations(results);
          this.locations.set(mappedLocations);
        },
      });
  }

  getLocation(locationId: string): Observable<Location>{
    return this.httpClient
      .get<LocationResponse>(`${environment.API_BASE_URL}/${environment.LOCATIONS_PATH}/${locationId}`)
      .pipe(
        map(location => LocationMapper.mapLocation(location))
      );
  }
}
