import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { AppService } from "../../app.service";
import * as $ from 'jquery';

@Component({
	selector: 'app-todo-info-detail',
	templateUrl: './todo-info-detail.component.html',
	styleUrls: ['./todo-info-detail.component.scss']
})
export class TodoInfoDetailComponent implements OnInit {

	info_detail: any;
	list_movie: any;
	status:any = false;

	id : any = +this.route.snapshot.paramMap.get('id');

	getAMovie : any;

	
	constructor(private route: ActivatedRoute, private appService: AppService, private router: Router) { }

	ngOnInit() {
		this.getInfoDetailTakeFromServerByID();
	}

	getInfoDetailNormal() {
		this.appService.getListMovieByJson().subscribe(data => {
			this.list_movie = data;

			this.list_movie.forEach(element => {
				if (element.id == this.id) {
					this.info_detail = element;
					console.log(this.info_detail)
				}
			});
			console.log('Get data success type 1');
		});
	}

	getInfoDetailTakeFromServer() {
		this.appService.getAMovie(this.id).subscribe(data => {
			this.info_detail = data;
			console.log('Get data success type 2')
		})
	}


	getInfoDetailTakeFromServerByID() {
		this.appService.getAMovieWithID(this.id).subscribe(data => {
			this.info_detail = data;
			// console.log(this.info_detail)
		})
	}

	
	del_Info(item){
		this.appService.DelAMovie(item).subscribe(data => {
			if(data){
				this.router.navigateByUrl("/todo-list");	
			}
		})
	}


	edit_Info(item){
		$('.todo_info_detail .name-detail input').removeAttr('disabled');
		this.status = true;
	}


	save_Info(item:any){
		$('.todo_info_detail .name-detail input').attr('disabled', true);
		this.status = false;
		this.appService.EditAMovie(item).subscribe(data => {
			if(data){
				this.router.navigateByUrl("/todo-list");		
			}else{
				
			}
		})
	}



}
