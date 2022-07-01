import React, { useState, KeyboardEvent } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
const { default: styles } = require('./AddTodoBox.module.css');

const AddTodoBox: React.FC = () => {
  interface IInputStateType {
    value: string;
    isValid: null | boolean;
  }

  const [input, setInput] = useState<IInputStateType>({ value: '', isValid: null });

  const { todos } = useTypedSelector((state) => state.todos);
  const id = todos.length === 0 ? '1' : String(+todos[todos.length - 1].id + 1);

  const { addTodo } = useActions();

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;
    let isValid: boolean = true;

    if (value.length > 160) {
      isValid = false;
    }

    setInput({ value, isValid });
  };

  const addTodoButtonHandler = () => {
    if (!input.isValid) {
      return;
    }

    const createdAt: string = new Date().toISOString().replace('T', ' ').slice(0, 16);

    const todo = {
      id,
      text: input.value,
      isFavourite: false,
      isCompleted: false,
      createdAt,
    };

    setInput({ value: '', isValid: null });

    addTodo(todo);
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodoButtonHandler();
    }
  };

  return (
    <div className={styles.container}>
      <TextInput
        keyDownHandler={keyDownHandler}
        value={input.value}
        isValid={input.isValid}
        onChange={inputChangeHandler}
      />
      <Button text="Add" onClick={addTodoButtonHandler} />
    </div>
  );
};

export default AddTodoBox;
