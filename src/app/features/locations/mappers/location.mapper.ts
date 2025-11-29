import { LocationResponse } from '../models/location-response.model';
import { Location } from '../models/location.model';

export class LocationMapper {
  static mapLocation(locationResponse: LocationResponse): Location {
    const { id, name, type, dimension, residents, url, created } =
      locationResponse;

    return {
      id: id,
      name: name,
      type: type,
      dimension: dimension,
      residents: residents,
      url: url,
      created: created,
    };
  }

  static mapLocations(locationsResponse: LocationResponse[]): Location[] {
    return locationsResponse.map((location) => this.mapLocation(location));
  }
}
