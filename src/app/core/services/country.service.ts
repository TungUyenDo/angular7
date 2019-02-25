import { Injectable } from '@angular/core';
 
import { COUNTRIES } from '../data/data-country';
import { Country } from '../models/country.model';
 
@Injectable()
export class CountryService {
 
  constructor() {
    console.log(COUNTRIES)
   }
 
  getCountries() {
    return COUNTRIES;
  }
 
  getPopulatedCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.population - a.population).slice(0, 3);
  }
 
  getLargestCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.area - a.area).slice(0, 3);
  }
 
  getGDPCountries(): Country[] {
    return COUNTRIES.sort((a, b) => b.gdp - a.gdp).slice(0, 3);
  }
 
  getCountry(name: string): Country {
    return COUNTRIES.find(country => country.name === name);
  }
}