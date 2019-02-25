import { Component, OnInit } from '@angular/core';
import { listMovie } from "../../../assets/data/todo.data";
import { AppService } from "../../app.service";


import { Store } from '@ngrx/store';
import { TodoActions } from './../../redux/redux.actions';


/** THIS PAGE NOT APPLY REDUX AND EFFECT*/


@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

	movies: any;
	currentMovie: any;
	dataFromStore : any;
	message : any;
	nameTodo : any;

	constructor(private appService: AppService, private store: Store<any>) {

		/** In here Not Use Store ---- 2 way subscribe store */

		// store.subscribe(store => {
		// 	this.dataFromStore = store.reduxReducer ;
		// 	return this.dataFromStore
		// })

		// this.store.select('reduxReducer').subscribe(data => {
		// 	 return this.dataFromStore = data
		// })

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
			// console.log('Data on Server:',this.movies)

			/** Nếu không dùng effect thì mỗi lần add new item thì push nó vào Data trả về */
			// if (this.dataFromStore.length > 0){
			// 	this.dataFromStore.forEach(element => {
			// 		this.movies.push(element)
			// 	});
			// }
		})
	}


	actionAddTodo(){
		const item = {
			id : new Date().getTime(),
			name: this.nameTodo
		}
		if (!this.nameTodo) {
			this.message = 'Vui lòng nhập đầy đủ nha!!!!'
		} else {
			this.message = '';
			this.appService.AddAMoviNormal(item).subscribe(res => res)
		}
		
	}

	del_aFilm(item:any){

		if(confirm('Bạn có chắc muốn xóa thằng này?')){
			this.appService.DelAMovie(item).subscribe(res => res)
		}else{}
		
	}
	del_All(item:any){
		item.forEach(element => {
			this.appService.DelAllMovie(element).subscribe(res => res)
		});
	}

}
