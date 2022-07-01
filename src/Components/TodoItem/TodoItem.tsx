import React, { useState, useRef, MutableRefObject, KeyboardEvent } from 'react';
import { TodoType } from '../../types/todos';
import { useActions } from '../../hooks/useActions';
import DeleteModal from '../DeleteModal/DeleteModal';
import TodoMenu from '../TodoMenu/TodoMenu';
import TextInput from '../TextInput/TextInput';
import TodoIcon from '../TodoIcon/TodoIcon';
const { default: styles } = require('./TodoItem.module.css');

interface TodoItemPropsType {
  todo: TodoType;
}

const TodoItem: React.FC<TodoItemPropsType> = ({ todo }) => {
  interface IInputStateType {
    value: string;
    isValid: null | boolean;
  }

  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isEditingTodo, setIsEditingTodo] = useState(false);

  const { id, text, isFavourite, isCompleted, createdAt } = todo;
  const [input, setInput] = useState<IInputStateType>({ value: text, isValid: true });

  const { changeTodoText, changeTodoFav, changeTodoCompleted } = useActions();

  const ref: MutableRefObject<any> = useRef(null);

  const setInputFocus = () => {
    ref.current.focus();
  };

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      changeTodoText(id, input.value);
      ref.current.blur();
    }
  };

  const openOrCloseMenu = () => {
    setIsShowMenu(!isShowMenu);
    setIsEditingTodo(false);
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    let isValid = true;

    if (value.length > 160) {
      isValid = false;
    }

    setInput({ value, isValid });
  };

  const changeFav = () => {
    changeTodoFav(id, !isFavourite);
  };

  const changeСompleted = () => {
    changeTodoCompleted(id, !isCompleted);
  };

  return (
    <div className={styles.container}>
      {isShowDeleteModal && (
        <DeleteModal id={id} text={text} createdAt={createdAt} setIsActive={setIsShowDeleteModal} />
      )}
      {isEditingTodo ? (
        <TextInput
          inputRef={ref}
          keyDownHandler={keyDownHandler}
          value={input.value}
          isValid={input.isValid}
          onChange={inputChangeHandler}
          setIsEditingTodo={setIsEditingTodo}
        />
      ) : (
        <div className={isCompleted ? `${styles.todo_text} ${styles.completed}` : styles.todo_text}>
          {id + ': ' + text}
        </div>
      )}

      {isFavourite && <TodoIcon onClick={changeFav} src="./icons/favourite.svg" alt="favourite" />}
      <div className={styles.todo_menu_container}>
        <TodoIcon onClick={openOrCloseMenu} src="./icons/todo-menu.svg" alt="todo menu" />
        {isShowMenu && (
          <TodoMenu
            setIsShowDeleteModal={setIsShowDeleteModal}
            todo={todo}
            changeFav={changeFav}
            changeСompleted={changeСompleted}
            editTodo={setIsEditingTodo}
            openOrCloseMenu={openOrCloseMenu}
            setInputFocus={setInputFocus}
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
