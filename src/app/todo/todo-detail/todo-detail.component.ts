import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-todo-detail',
	templateUrl: './todo-detail.component.html',
	styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

	@Input() movie: any

	constructor(private router: Router) { }

	ngOnInit() {}


}
