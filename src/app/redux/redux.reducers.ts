import { ActionReducer } from "@ngrx/store";
import { TodoActions } from "./redux.actions";

export const initialState = [];

export function counterReducer(state:any = initialState, {type,payload}:any) {
    switch (type) {
        
        case TodoActions.ADD:
            state = [
                ...state,{
                    item : payload
            }]
            return state;

        case TodoActions.UPDATE:
            state = {}
            return state;

        case TodoActions.DELETE:
            state = [
                ...state, {
                    item: payload
                }]
            return state;

        default:
            return state;
    }
}