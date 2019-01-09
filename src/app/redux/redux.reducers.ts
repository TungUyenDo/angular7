import { ActionReducer } from "@ngrx/store";
import { TodoActions } from "./redux.actions";

export const initialState = [];

export function counterReducer(state:any = initialState, {type,payload}:any) {
    switch (type) {
        case TodoActions.ADD:
            state = [
                ...state,{
                    id: new Date().getTime(),
                    name: payload
            }]
            return state;

        case TodoActions.UPDATE:
            state = {

            }
            return state;

        case TodoActions.DELETE:
            return 0;

        default:
            return state;
    }
}