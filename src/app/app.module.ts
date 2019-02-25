import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { AppService  } from './app.service';
import { UserService  } from './core/services/user.service';
import { CountryService  } from './core/services/country.service';
import { TodoInfoDetailComponent } from './todo/todo-info-detail/todo-info-detail.component';
import { MenuComponent } from './menu/menu.component';
import { ReduxComponent } from './redux/redux.component';


import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { ReduxAddComponent } from './redux/redux-add/redux-add.component';
import { ReduxListComponent } from './redux/redux-list/redux-list.component';
import { TodoActions } from '../app/redux/redux.actions';
import { AppEffects } from './app.effect';
import { OopComponent } from './oop/oop.component';
import { OopListComponent } from './oop/oop-list/oop-list.component';
import { OopDetailComponent } from './oop/oop-detail/oop-detail.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDetailComponent,
    IntroduceComponent,
    TodoListComponent,
    TodoInfoDetailComponent,
    MenuComponent,
    ReduxComponent,
    ReduxAddComponent,
    ReduxListComponent,
    OopComponent,
    OopListComponent,
    OopDetailComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    AppService,
    UserService,
    CountryService,
    TodoActions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
