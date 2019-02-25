import { Component, OnInit } from '@angular/core';
import { UserService } from "../../core/services/user.service";
import { CountryService } from "../../core/services/country.service";
import { User } from '../../core/models/user.model';
import { Country } from '../../core/models/country.model';

@Component({
	selector: 'app-oop-list',
	templateUrl: './oop-list.component.html',
	styleUrls: ['./oop-list.component.scss']
})
export class OopListComponent implements OnInit {

	constructor(private userService: UserService, private countryService: CountryService) {
		
	}

	ngOnInit() {
		// this.getAllCountry();
		this.getPopulatedCountries();
		this.getCountry()
	}

	getAllCountry(){
		console.log(this.countryService.getCountries())
	}
	getPopulatedCountries(){
		console.log(this.countryService.getPopulatedCountries())
	}
	getCountry(){
		console.log(this.countryService.getCountry("Canada"))
	}

}
