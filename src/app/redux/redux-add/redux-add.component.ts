import { AppService } from './../../app.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from "@ngrx/store";
import { TodoActions } from "../redux.actions";

import * as $ from 'jquery';

@Component({
	selector: 'app-redux-add',
	templateUrl: './redux-add.component.html',
	styleUrls: ['./redux-add.component.scss']
})
export class ReduxAddComponent implements OnInit {

	dataStore : any

	constructor(private store: Store<any>, 
				private todoActions: TodoActions) {}


	// @Output() movie = new EventEmitter<any>();

	item = {
		id: 0,
		name: ''
	}
	message : any;

	ngOnInit() {}


	action_AddMovie() {
		this.item.id = new Date().getTime();
		if(!this.item.name){
			this.message = 'Vui lòng nhập đầy đủ nha!!!!'
		}else{
			this.message = '';
			this.store.dispatch(this.todoActions.addTodo(this.item));
		}
	}
}
