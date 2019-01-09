import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as counterReducer from '../app/redux/redux.reducers';

export const reducers: ActionReducerMap<any> = {
	reduxReducer: counterReducer.counterReducer,
};