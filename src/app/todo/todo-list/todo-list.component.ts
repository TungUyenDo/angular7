import { Component, OnInit } from '@angular/core';
import { listMovie } from "../../../assets/data/todo.data";
import { AppService } from "../../app.service";


@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	movies : any;
	currentMovie : any;

	constructor(private appService: AppService) { }

	ngOnInit() {

		/* Get data Observable By Json */
		this.getDatatMovieByJson()
	}

	/* click and show item   */
	onClickMovie(data){
		this.currentMovie = data;
	}

	/* fetch data on service by normal not Observable */
	getDataMovieNormal(){
		this.movies = this.appService.getListMovieNormal()
	}

	/* fetch data on service by Observable */
	getDatatMovieObservable(){
		this.appService.getListMovieObservable().subscribe(data => 
			this.movies = data
		);
	}

	getDatatMovieByJson(){
		this.appService.getListMovieByJson().subscribe(data =>{
				this.movies = data;

				localStorage.setItem('movies', this.movies)

				// console.log(this.movies)
			}
		);
	}





	

}
