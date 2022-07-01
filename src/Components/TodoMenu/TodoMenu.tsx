import React from 'react';
import { TodoType } from '../../types/todos';
const { default: styles } = require('./TodoMenu.module.css');

interface todoMenuPropsType {
  todo: TodoType;
  openOrCloseMenu: Function;
  editTodo: Function;
  setInputFocus: Function;
  changeFav: Function;
  changeСompleted: Function;
  setIsShowDeleteModal: Function;
}

const TodoMenu: React.FC<todoMenuPropsType> = ({
  todo,
  openOrCloseMenu,
  editTodo,
  setInputFocus,
  changeFav,
  changeСompleted,
  setIsShowDeleteModal,
}) => {
  const { isCompleted, isFavourite } = todo;

  return (
    <div
      className={styles.container}
      onBlur={() => {
        openOrCloseMenu();
      }}
    >
      <div
        className={styles.menu_btn}
        onClick={() => {
          changeFav();
          openOrCloseMenu();
        }}
      >
        {isFavourite ? 'Убрать из избранного' : 'В избранное'}
      </div>
      <div
        className={styles.menu_btn}
        onClick={() => {
          changeСompleted();
          openOrCloseMenu();
        }}
      >
        {isCompleted ? 'Вернуть в работу' : 'Выполнено'}
      </div>
      <div
        className={styles.menu_btn}
        onClick={() => {
          openOrCloseMenu();
          editTodo(true);
          setTimeout(() => {
            setInputFocus();
          });
        }}
      >
        Редактировать
      </div>
      <div
        className={styles.menu_btn}
        onClick={() => {
          setIsShowDeleteModal(true);
          openOrCloseMenu();
        }}
      >
        Удалить
      </div>
    </div>
  );
};

export default TodoMenu;
