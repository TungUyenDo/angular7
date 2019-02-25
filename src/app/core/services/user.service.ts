import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';


//list models
import { User } from '../models/user.model'
import { Country } from '../models/country.model'

@Injectable()
export class UserService {
	

	user : User;
	url_server = 'http://localhost:3000/list/';

	constructor(private http: HttpClient) {}

	public getAll():Observable<any> {
		return this.http.get(this.url_server).pipe(
			map(data => {
				return data;
			}),
			catchError(this.handleError)
		);
	}

	create(user: User) {
		//API call to create user
	}

	update(user: User) {
		//API call to update user
	}

	delete(id: number) {
		//API call to delete user
	}

	//-------------------------error handle
	private handleError(error: Response | any) {
		console.error('AppService::handleError', error);
		return Observable.throw(error);
	}

}