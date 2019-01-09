import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { TodoActions } from "../redux.actions";


import * as $ from 'jquery';


@Component({
	selector: 'app-redux-add',
	templateUrl: './redux-add.component.html',
	styleUrls: ['./redux-add.component.scss']
})
export class ReduxAddComponent implements OnInit {

	constructor(private store : Store<any>, private todoActions : TodoActions ) { }


	name : any

	ngOnInit() {
	}
	actionAddMovie(movie){
		$('.input-name').attr('disabled',true)
		
		this.store.dispatch(this.todoActions.addTodo(this.name));
		this.name = ''

	}

}
