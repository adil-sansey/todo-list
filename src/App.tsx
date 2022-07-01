import React from 'react';
import './App.css';
import AddTodoBox from './Components/AddTodoBox/AddTodoBox';
import TodosList from './Components/TodosList/TodosList';

const App = () => {
  return (
    <div className="App">
      <AddTodoBox />
      <TodosList />
    </div>
  );
};

export default App;
