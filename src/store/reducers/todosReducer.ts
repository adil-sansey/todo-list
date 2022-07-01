import { ITodoState, TodoAction, TodosActionTypes } from '../../types/todos';

const initialState: ITodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const todosReducer = (state = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case TodosActionTypes.FETCH_TODOS:
      return { loading: true, error: null, todos: [] };

    case TodosActionTypes.FETCH_TODOS_SUCCESS:
      return { loading: false, error: null, todos: action.payload };

    case TodosActionTypes.FETCH_TODOS_ERROR:
      return { loading: false, error: action.payload, todos: [] };

    case TodosActionTypes.ADD_TODO:
      return { todos: [...state.todos, action.payload], loading: false, error: null };

    case TodosActionTypes.DELETE_TODO: {
      const newState = state.todos.filter((todo) => todo.id !== action.payload);
      return { todos: newState, loading: false, error: null };
    }

    case TodosActionTypes.CHANGE_TODO_TEXT: {
      const idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state.todos];
      newState[idx] = { ...state.todos[idx], text: action.payload.text };
      return {
        todos: newState,
        loading: false,
        error: null,
      };
    }

    case TodosActionTypes.CHANGE_TODO_FAV: {
      const idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state.todos];
      newState[idx] = { ...state.todos[idx], isFavourite: action.payload.isFavourite };
      return {
        todos: newState,
        loading: false,
        error: null,
      };
    }

    case TodosActionTypes.CHANGE_TODO_COMPLETED: {
      const idx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      const newState = [...state.todos];
      newState[idx] = { ...state.todos[idx], isCompleted: action.payload.isCompleted };
      return {
        todos: newState,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};
