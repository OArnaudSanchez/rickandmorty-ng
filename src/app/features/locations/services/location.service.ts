import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment.development';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
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
      .pipe(
        map(({ results }) => LocationMapper.mapLocations(results)),
        tap(locations => this.locations.set(locations)),
        catchError(error => throwError(() => new Error(error)))
      ).subscribe();
  }

  getLocation(locationId: string): Observable<Location>{
    return this.httpClient
      .get<LocationResponse>(`${environment.API_BASE_URL}/${environment.LOCATIONS_PATH}/${locationId}`)
      .pipe(
        map(location => LocationMapper.mapLocation(location)),
        catchError(error => throwError(() => new Error(error)))
      );
  }
}
