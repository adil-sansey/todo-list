import React, { useState, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FilterBox from '../FilterBox/FilterBox';
import TodoItem from '../TodoItem/TodoItem';
const { default: styles } = require('./TodosList.module.css');

const TodosList: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const { todos, loading, error } = useTypedSelector((state) => state.todos);

  const { fetchTodos } = useActions();

  useEffect(() => {
    switch (filter) {
      case 'all':
        fetchTodos('https://62bbf3906b1401736ced4d48.mockapi.io/todos');
        break;

      case 'completed':
        fetchTodos('https://62bbf3906b1401736ced4d48.mockapi.io/todos?isCompleted=true');
        break;

      case 'uncompleted':
        fetchTodos('https://62bbf3906b1401736ced4d48.mockapi.io/todos?isCompleted=false');
        break;

      case 'favourite':
        fetchTodos('https://62bbf3906b1401736ced4d48.mockapi.io/todos?isCompleted=false');
        break;

      default:
        break;
    }
  }, [filter]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className={styles.container}>
      <FilterBox filter={filter} setFilter={setFilter} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodosList;
