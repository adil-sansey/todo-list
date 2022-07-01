import React from 'react';
import Button from '../Button/Button';
import { useActions } from '../../hooks/useActions';

const { default: styles } = require('./DeleteModal.module.css');

interface DeleteModalPropsType {
  id: string;
  text: string;
  createdAt: string;
  setIsActive: Function;
}

const DeleteModal: React.FC<DeleteModalPropsType> = ({ id, text, createdAt, setIsActive }) => {
  const { deleteTodo } = useActions();

  return (
    <div className={styles.modal} onClick={() => setIsActive(false)}>
      <div className={styles.modal__content} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => {
            setIsActive(false);
          }}
          className={styles.closeBtn}
        >
          <div style={{ marginBottom: '-3px', color: 'red' }}> X </div>
        </button>
        <h2>Вы действительно хотите удалить задачу?</h2>
        <p>{text}</p>
        <p>{createdAt}</p>
        <div className={styles.btns_container}>
          <Button
            text="Отмена"
            onClick={() => {
              setIsActive(false);
            }}
          />
          <Button
            text="Удалить"
            onClick={() => {
              deleteTodo(id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
