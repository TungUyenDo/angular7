import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

@Component({
	selector: 'app-redux',
	templateUrl: './redux.component.html',
	styleUrls: ['./redux.component.scss']
})
export class ReduxComponent implements OnInit {

	constructor(private store : Store<any>) { }

	ngOnInit() {
	}
}
