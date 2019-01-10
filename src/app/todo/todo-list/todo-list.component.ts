import { Component, OnInit } from '@angular/core';
import { listMovie } from "../../../assets/data/todo.data";
import { AppService } from "../../app.service";


import { Store } from '@ngrx/store';


@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	movies: any;
	currentMovie: any;
	dataFromStore : any;

	constructor(private appService: AppService, private store: Store<any>) {
		// store.subscribe(store => {
		// 	this.dataFromStore = store.reduxReducer ;
		// 	console.log(this.dataFromStore);
		// 	return this.dataFromStore
		// })

		this.store.select('reduxReducer').subscribe(data => {
			 return this.dataFromStore = data
		})

	}

	ngOnInit() {

		/* Get data Observable By Json */
		this.getDatatMovieByJson()

	}

	/* click and show item   */
	onClickMovie(data) {
		this.currentMovie = data;
	}

	/* fetch data on service by normal not Observable */
	getDataMovieNormal() {
		this.movies = this.appService.getListMovieNormal();
	}

	/* fetch data on service by Observable */
	getDatatMovieObservable() {
		this.appService.getListMovieObservable().subscribe(data =>
			this.movies = data
		);
	}

	getDatatMovieByJson() {
		this.appService.getListMovieByJson().subscribe(data => {
			this.movies = data;
			console.log(this.movies)
			if (this.dataFromStore.length > 0){
				this.dataFromStore.forEach(element => {
					this.movies.push(element)
				});
			}
		})
	}

	i_todo : object;
	nameTodo : any;

	actionAddTodo(name:any){
		console.log(name);
		const item = {
			id : new Date().getTime(),
			name : name
		}
		this.appService.AddAMovie(item).subscribe(res => {
			console.log(res)
		})
	}

	del_aFilm(item:any){
		if(confirm('Bạn có chắc muốn xóa thằng này?')){
			this.appService.DelAMovie(item).subscribe(res => {
				console.log(res)
			})
		}else{}
		
	}

}
