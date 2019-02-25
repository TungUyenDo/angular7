import { AppService } from './../../app.service';
import { TodoActions } from './../redux.actions';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';


@Component({
	selector: 'app-redux-list',
	templateUrl: './redux-list.component.html',
	styleUrls: ['./redux-list.component.scss']
})
export class ReduxListComponent implements OnInit {

	dataReduxReducer : any;

	constructor(private store: Store<any>, 
				private todoActions: TodoActions,
				private AppService: AppService) {
	}

	ngOnInit() {
		this.AppService.getListMovieByJson().subscribe(res => {
			this.dataReduxReducer = res;
			// console.log(this.dataReduxReducer)
		})
	}


	del_by_AMovie(item:any){
		this.AppService.DelAMovie(item).subscribe(res => res)
	}

	del_all(list:any){
		list.forEach(element => {
			this.AppService.DelAMovie(element).subscribe(res => res)
		});
	}






}
