export type TodoType = {
  id: string;
  text: string;
  isFavourite: boolean;
  isCompleted: boolean;
  createdAt: string;
};

export interface ITodoState {
  todos: TodoType[];
  loading: boolean;
  error: null | string;
}

export enum TodosActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
  FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
  ADD_TODO = 'ADD_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT',
  CHANGE_TODO_FAV = 'CHANGE_TODO_FAV',
  CHANGE_TODO_COMPLETED = 'CHANGE_TODO_COMPLETED',
}

interface IFetchTodosAction {
  type: TodosActionTypes.FETCH_TODOS;
}

interface IFetchTodosSuccessAction {
  type: TodosActionTypes.FETCH_TODOS_SUCCESS;
  payload: any[];
}

interface IFetchTodosErrorAction {
  type: TodosActionTypes.FETCH_TODOS_ERROR;
  payload: string;
}

interface IAddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: TodoType;
}

export type AddTodoAction = {
  type: TodosActionTypes.ADD_TODO;
  payload: TodoType;
};

export type DeleteTodoAction = {
  type: TodosActionTypes.DELETE_TODO;
  payload: string;
};

export type ChangeTodoTextAction = {
  type: TodosActionTypes.CHANGE_TODO_TEXT;
  payload: { id: string; text: string };
};

export type ChangeTodoCompletedAction = {
  type: TodosActionTypes.CHANGE_TODO_COMPLETED;
  payload: { id: string; isCompleted: boolean };
};

export type ChangeTodoFavAction = {
  type: TodosActionTypes.CHANGE_TODO_FAV;
  payload: { id: string; isFavourite: boolean };
};

export type TodoAction =
  | IFetchTodosAction
  | IFetchTodosSuccessAction
  | IFetchTodosErrorAction
  | IAddTodoAction
  | DeleteTodoAction
  | ChangeTodoTextAction
  | ChangeTodoFavAction
  | ChangeTodoCompletedAction;
