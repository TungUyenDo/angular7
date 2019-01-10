import { Injectable } from '@angular/core';
import { listMovie } from "../assets/data/todo.data";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(private http: HttpClient
		
	){}

	url : any = '../assets/data/todo.data.json';
	url_server = 'http://localhost:3000/man/';
	dataSubcribes :any;

	/* Call data normal */
	getListMovieNormal () {
	  return listMovie;
	}


	/* Call data by Observable on datalocal*/
	getListMovieObservable(): Observable<any[]> {
		return of(listMovie);
	};


	/* Call data by Observable on Json */
	/** Tap and Map : https://www.concretepage.com/questions/633 */
	getListMovieByJson(): Observable<any> {
		
		return this.http.get(this.url_server).pipe(
			map(data => {
				this.dataSubcribes = data;
				return this.dataSubcribes
			}),
			catchError(this.handleError)
		);
	};
	

	/* Get a movie by Observable */
	getAMovie(id: any): Observable<any> {
		return of(listMovie.find(movie => movie.id === id))
	};


	/*get a movie on server */
	getAMovieWithID(id: any): Observable<any> {
		return this.http.get(this.url_server + id ).pipe(
			map(data => {
				return data;
			}),
			catchError(this.handleError)
		);
	};
	


	/* Add a movie  */
	AddAMovie(item: any): Observable<any> {
		
		let headers = new HttpHeaders({
			'Cache-Control': 'no-cache',
			'Accept': 'application/json'
		});

		return this.http.post(this.url_server, item, {headers: headers}).pipe(
			map(data => {
				return data;
			}),
			catchError(this.handleError)
		);
		
	};
	/* Edit a movie  */
	EditAMovie(item: any): Observable<any> {
		const httpOptions = {
			headers: new HttpHeaders({'Content-type':'application/json'})
		}

		return this.http.put(this.url_server + item.id, item).pipe(
			map(data => {
				return data;
			}),
			catchError(this.handleError)
		);
		
	};

	
	/* Del a movie  */
	DelAMovie(item: any): Observable<any> {
		// return of(
		// 	 this.dataSubcribes.filter(function (ele) {
		// 		return ele.id != id;
		// 	})
		// )

		return this.http.delete(this.url_server + item.id, item).pipe(
			map(data => {
				return true;
				console.log('Delete successful');
			}),
			catchError(this.handleError)
		);
	};



	/** DATA TRANSFER*/
	getDataTransfer():Observable<any>{

		return this.http.get(this.url_server).pipe(
			map(data => {
				return data;
			}),
			catchError(this.handleError)
		);
	}


	

	//-------------------------error handle
	private handleError(error: Response | any) {
		console.error('AppService::handleError', error);
		return Observable.throw(error);
	}

}
