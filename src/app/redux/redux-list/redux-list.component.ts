import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
	selector: 'app-redux-list',
	templateUrl: './redux-list.component.html',
	styleUrls: ['./redux-list.component.scss']
})
export class ReduxListComponent implements OnInit {

	dataReduxReducer : any;

	constructor(private store: Store<any>) {
		store.subscribe(store => {
			this.dataReduxReducer = store.reduxReducer;
			console.log(this.dataReduxReducer);
		});
	}

	statusAdd :boolean = false;

	ngOnInit() {

	}

	onClickAdd(){
		this.statusAdd = true;
		$('.input-name').removeAttr('disabled')
	}



}
