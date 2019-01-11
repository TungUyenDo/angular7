import { Action } from "@ngrx/store";

export class TodoActions {
    static ADD = 'ADD';
    static UPDATE = 'UPDATE';
    static DELETE = 'DELETE';

    addTodo(item : any){
        return{
            type:TodoActions.ADD,
            payload: item
        }
    };
    updateTodo(id : any){
        return{
            type:TodoActions.UPDATE,
            payload: id
        }
    };
    deleteTodo(item : any){
        return{
            type:TodoActions.DELETE,
            payload: item
        }
    }
}