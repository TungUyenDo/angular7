import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoDetailComponent } from "./todo/todo-detail/todo-detail.component";
import { TodoInfoDetailComponent } from "./todo/todo-info-detail/todo-info-detail.component";
import { TodoListComponent } from "./todo/todo-list/todo-list.component";
import { MainComponent } from "./main/main.component";
import { ReduxListComponent } from "./redux/redux-list/redux-list.component";
import { OopListComponent } from "./oop/oop-list/oop-list.component";
import { OopDetailComponent } from "./oop/oop-detail/oop-detail.component";
import { TodoComponent } from "./todo/todo.component";
import { AppComponent } from "./app.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'redux-list', component: ReduxListComponent },
  { path: 'todo-info-detail/:id', component: TodoInfoDetailComponent },
  { path: 'oop', component: OopListComponent },
  { path: 'oop-detail/:id', component: OopDetailComponent },
  { path: "**", redirectTo: ''},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/** NOTE FOR ROUTE */
/** 
 
use { useHash: true } 

=> when redirect to Detail page and error page

*/
