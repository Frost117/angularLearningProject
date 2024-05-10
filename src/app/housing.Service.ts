import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUrl = 'https://picsum.photos/400/';
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Fairway Apartments',
      city: 'San Francisco',
      state: 'CA',
      photo: `${this.baseUrl}700`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'Fairway Apartments',
      city: 'San Francisco',
      state: 'CA',
      photo: `${this.baseUrl}400`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
    {
      id: 2,
      name: 'Fairway Apartments',
      city: 'San Francisco',
      state: 'CA',
      photo: `${this.baseUrl}600`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
    {
      id: 3,
      name: 'Fairway Apartments',
      city: 'San Francisco',
      state: 'CA',
      photo: `${this.baseUrl}500`,
      availableUnits: 3,
      wifi: true,
      laundry: true
    },
  ] 

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
