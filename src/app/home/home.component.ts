import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.Service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Search for a home">
        <button type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location 
      *ngFor="let housingLocation of housingLocationList" 

      [housingLocation]="housingLocation">

    </app-housing-location>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = []
  housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

}