import { Dispatch } from 'redux';
import {
  TodoAction,
  TodosActionTypes,
  TodoType,
  AddTodoAction,
  DeleteTodoAction,
  ChangeTodoTextAction,
  ChangeTodoFavAction,
  ChangeTodoCompletedAction,
} from '../../types/todos';

export const fetchTodos = (url: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodosActionTypes.FETCH_TODOS });

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        response.json().then((data) => {
          dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: data });
        });
      })
      .catch((error) => {
        dispatch({
          type: TodosActionTypes.FETCH_TODOS_ERROR,
          payload: error.message,
        });
      });
  };
};

export const addTodo = (todo: TodoType) => {
  return (dispatch: Dispatch<AddTodoAction>) => {
    dispatch({ type: TodosActionTypes.ADD_TODO, payload: todo });

    fetch(`https://62bbf3906b1401736ced4d48.mockapi.io/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    }).catch((error) => {
      console.log(error.message);
    });
  };
};

export const deleteTodo = (id: string) => {
  return (dispatch: Dispatch<DeleteTodoAction>) => {
    dispatch({ type: TodosActionTypes.DELETE_TODO, payload: id });

    fetch(`https://62bbf3906b1401736ced4d48.mockapi.io/todos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      console.log(error.message);
    });
  };
};

export const changeTodoText = (id: string, text: string) => {
  return (dispatch: Dispatch<ChangeTodoTextAction>) => {
    dispatch({ type: TodosActionTypes.CHANGE_TODO_TEXT, payload: { id, text } });

    fetch(`https://62bbf3906b1401736ced4d48.mockapi.io/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    }).catch((error) => {
      console.log(error.message);
    });
  };
};

export const changeTodoFav = (id: string, isFavourite: boolean) => {
  return (dispatch: Dispatch<ChangeTodoFavAction>) => {
    dispatch({ type: TodosActionTypes.CHANGE_TODO_FAV, payload: { id, isFavourite } });

    fetch(`https://62bbf3906b1401736ced4d48.mockapi.io/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isFavourite }),
    }).catch((error) => {
      console.log(error.message);
    });
  };
};

export const changeTodoCompleted = (id: string, isCompleted: boolean) => {
  return (dispatch: Dispatch<ChangeTodoCompletedAction>) => {
    dispatch({ type: TodosActionTypes.CHANGE_TODO_COMPLETED, payload: { id, isCompleted } });

    fetch(`https://62bbf3906b1401736ced4d48.mockapi.io/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isCompleted }),
    }).catch((error) => {
      console.log(error.message);
    });
  };
};
