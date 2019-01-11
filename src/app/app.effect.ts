import { catchError } from 'rxjs/operators';

import { TodoActions } from './redux/redux.actions';
import { AppService } from './app.service';
import { Injectable  } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { Action } from '@ngrx/store';

import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { throwError, Observable } from 'rxjs';
import { switchMap, map} from 'rxjs/operators'
 

@Injectable()
export class AppEffects {
    constructor(
        private actions$: Actions,
        private AppService: AppService,        
    ) { }


    @Effect() addTodoEffect$ = this.actions$.pipe(
        ofType(TodoActions.ADD),
        switchMap(query => this.AppService.AddAMovieEffect(query)),
        map((data: any) => {
            return {
                type: 'addTodo',
            }
        }),
        catchError(errors => throwError(errors))
    )

    
}