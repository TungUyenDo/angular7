import { TodoActions } from './redux/redux.actions';
import { AppService } from './app.service';
import { Injectable  } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs'
import { Action } from "@ngrx/store";
import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { switchMap } from 'rxjs/operators';  


@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private AppService: AppService,
        // private TodoActions: TodoActions,
        
    ) { }


    // @Effect() addMovie$ = this.actions$
    //     .ofType(TodoActions.ADD)
    //     .switchMap( (query) =>
    //     this.AppService.AddAMovie(query)
    //         .map((data: any) => {
    //             return data
    //         })
    //         .catch(errors => 'error')
    //     );

}